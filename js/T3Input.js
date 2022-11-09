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
     $Scene.scene.rotation.z-= diffx*0.05
     $Scene.scene.rotation.x-= diffy*0.05
     cX=x; 
     cY=y;
  });
  
  $("#Button").on("click",function(){
    const e=new THREE.Euler(
    THREE.MathUtils.degToRad(-35.4122),
    THREE.MathUtils.degToRad(-139.4130),
    0)
    
    $Scene.rotation.x=e.x
    $Scene.rotation.y=e.y
    alert("reset")
  	//alert(e.x);
  });
}

class UI{
	static CreateBottom(){
		$("body")
	}
}