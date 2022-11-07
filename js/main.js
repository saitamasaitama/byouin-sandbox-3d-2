const h= 36;
const w= 36;
const $Scene=Scene.CreateScene()
const $Debug=Debug.CreateDebug(); 


const G=Group();
const Table=[];
$Scene.add(G);





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
setInterval(function(){scene.Animation()},33)
setInterval(function(){LifeUpdate() },1000)//alert(88)