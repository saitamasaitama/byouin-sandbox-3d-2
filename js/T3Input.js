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
    
    alert("reset")
  	//alert(e.x);
  });
}

class UI{
	static CreateBottom(){
		$("body")
	}
}