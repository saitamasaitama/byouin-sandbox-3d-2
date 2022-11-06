const h= 36;
const w= 36;
const scene=Scene.CreateScene()
$("Body").append("<div id='Debug'>dev</div>");
const Debug=$("#Debug");


const G=Group();
const Table=[];
for(let y=0;y<h;y++){
  const row =[];
  for(let x=0;x<w;x++){
  
    const xp= -1.1*(w/2) + 1.1*x
    const yp= -1.1*(h/2) + 1.1*y
    
    const info={
      x:x,
      y:y,
      current:true,
      next:false,
      object:GameObject(
        {x:xp,y:0,z:yp},
        {x:0,y:0,z:0},
        {x:0.75,y:0.75,z:0.75}
      )
    };
    
     //scene.append(info.object);
     G.add(info.object);
     row.push(info);
   }
//   alert(row.length);
   Table.push(row);
}


//const helper=new THREE.AxesHelper(20);
//scene.add(helper)

const light = new THREE.AmbientLight(0x888888, 1.0);
const dlight = new THREE.DirectionalLight(0xFFFFFF, 1);
dlight.rotation.x=0.25*Math.PI
scene.add(light);
scene.add(dlight);
scene.add(G);


function LifeUpdate(){
 
  for(let y=0;y<h;y++){
    for(let x=0;x<w;x++){
      liveCheck(x,y);
      o=Table[y][x];
      if(o.next){
          o.object.material.color=Color(0xFFFF00);
        }else{
           o.object.material.color=Color(0x004444); 
        }   
     }
  }
  for(let y=0;y<h;y++){
    for(let x=0;x<w;x++){
      Table[y][x].current=Table[y][x].next;
    }}  
//  alert(76)
}// life update


function liveCheck(x,y){
  const info=Table[y][x]; 
 
  let count=0;
  if(liveCheckC(x-1,y-1))count++;
  if(liveCheckC(x,y-1))count++;
  if(liveCheckC(x+1,y-1))count++;
  if(liveCheckC(x-1,y))count++;
  if(liveCheckC(x+1,y))count++;
  if(liveCheckC(x-1,y+1))count++;
  if(liveCheckC(x,y+1))count++;
  if(liveCheckC(x+1,y+1))count++;
    const self=info.current
    const r3=  !self && count ==3;
    const l23= self && (count ==3 || count == 2);
    if(r3 || l23 ){
      info.next=true;
    }else{
      info.next=false;
    }
    Table[y][x]=info;
}//livecheck
function liveCheckC(x,y){
  if(x<0)return false;
  if(w<=x)return false;
  if(y<0)return false;
  if(h<=y)return false;
  //alert(Table[y][x])
  const result = Table[y][x].current;
 // alert(77)
  return result;
}

function RandomSet(){
  for(let y=0;y<h;y++){
   for(let x=0;x<w;x++){
     Table[y][x].current=0.5<Math.random()
   }
  }
  Debug.text("rand")

}


let cX = null;
let cY = null;
function InputSet(){
  $("canvas").on("touchstart",function(e){
     const x =e.changedTouches[0].pageX
     const y =e.changedTouches[0].pageY
     cX=x
     cY=y
  });
  $("canvas").on("touchmove",function(e){
     const x =e.changedTouches[0].pageX
     const y =e.changedTouches[0].pageY
     const diffx = x -cX;
     const diffy = y -cY;
     scene.camera.position.x-= diffx*0.05
     scene.camera.position.z-= diffy*0.05
     Debug.text(diffx+":"+diffy)
     cX=x; 
     cY=y;
  });
}

InputSet();
RandomSet();
setInterval(function(){scene.Animation()},33)
setInterval(function(){LifeUpdate() },1000)//alert(88)