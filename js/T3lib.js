
class Scene{
  constructor(){
		this.scene=new THREE.Scene();
		this.item = [];
		this.renderer = new THREE.WebGLRenderer();
    		const canvas=$(this.renderer.domElement);
    		this.renderer.setSize( window.innerWidth, window.innerHeight );
    		$("body").append(canvas);
    		this.camera = new THREE.PerspectiveCamera(60, 
    window.innerWidth / window.innerHeight,0.1, 1000 );
    		this.renderer.setPixelRatio(window.devicePixelRatio);
    		this.camera.up = new THREE.Vector3( 0, 1, 0 )
    		this.camera.position.y=40
    		this.camera.position.z=3.5
    		this.camera.rotation.x=-0.4*Math.PI
    		this.scene.background=new THREE.Color(0x666666)
    		const light = new THREE.AmbientLight(0x444444, 1.0);
    		const dlight = new THREE.DirectionalLight(0xFFFFFF, 1);
     	dlight.rotation.x=0.25*Math.PI
    		this.scene.add(light);
    		this.scene.add(dlight);
	} 
 	static CreateScene(){
    		const result=new Scene();
    		return result;
    }
    
    add(o){
    		this.scene.add(o);
    		return this;
    }  
	
	Update(update,delta=0.0333){
		update(delta);
		this.renderer.render( this.scene, this.camera );
	}
}//Scene end

function Color(x){
  return new THREE.Color(x);
}

function V3(x,y,z){
	return new THREE.Vector3(x,y,z);
}

class Quaternion{
	static Euler(x,y,z){
		return new THREE.Euler(x,y,z);
	}
}
class Vector3{
	static Up(){
		return new THREE.Vector3(0,1,0)
	}
	static Forward(length=1){
		return new THREE.Vector3(0,0,length)
	}
	
}


function Group(){
  return new THREE.Group();
}
class Primitive{
  static Sphere(color=0x888888,radius=1,w=32,h=16){
  	const g = new THREE.SphereGeometry(radius,w,h);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	const sphere=new THREE.Mesh(g,m)
  	return sphere;
  }
  static Cylinder(color=0x888888,t=1,b=1,h=2,s=16){
 	const g = new THREE.CylinderGeometry(t,b,h,s);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	return new THREE.Mesh(g,m)
  }
  
  static Circle(color=0x888888,r=1,s=16){
 	const g = new THREE.CircleGeometry(r,s);
  	const m = new THREE.MeshStandardMaterial({color:color});
  	return new THREE.Mesh(g,m)
  }
}


class GameObject{
	constructor(update){
		this.OnUpdate=update
	}
	
	Update(delta){
		this.OnUpdate(delta);
	}
}

function GameObjectx(
  position={x:0,y:0,z:0},
  rotation={x:0,y:0,z:0},
  scale={x:1,y:1,z:1}
){
  const geometry = new THREE.BoxGeometry( scale.x, scale.y, scale.z );
  const material = new THREE.MeshStandardMaterial( { color:0x44EE44 } );
  const mesh= new THREE.Mesh( geometry, material );
  mesh.position.x=position.x;
  mesh.position.y=position.y;
  mesh.position.z=position.z;
  return mesh;
}

