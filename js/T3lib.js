class Scene{
  constructor(){
    this.scene=new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    const canvas=$(this.renderer.domElement);
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    $("body").append(canvas);
    this.camera = new THREE.PerspectiveCamera(60, 
    window.innerWidth / window.innerHeight,0.1, 1000 );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.up = new THREE.Vector3( 0, 1, 0 )
    this.camera.position.y=20
    this.camera.position.z=3.5
    this.camera.rotation.x=-0.45*Math.PI
    this.scene.background=new THREE.Color(0x666666)
  } 
     static CreateScene(){
      const result=new Scene();
       return result;
    }
    add(o){
    this.scene.add(o);
    return this;
    }  
    Animation(){ 	  
    //this.scene.rotation.y += 0.0
    // this.camera.rotation.z+=0.03
	   this.renderer.render( this.scene, this.camera );
  }
}//Scene end

function Color(x){
  return new THREE.Color(x);
}

class V{

  constructor(x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;  
  }
  
  
  static Up(){
    return new V(0,1,0);
  }
 static Down(){
    return new V(0,-1,0);
  }
  static Right(){
    return new V(1,0,0);
  }
  static Left(){
    return new V(-1,0,0);
  }
  static Forward(){
    return new V(0,0,1);
  }
  static Back(){
    return new V(0,0,-1);
  }
  
  add(V2){
     this.x+=V2.x;
     this.y+=V2.y;
     this.z+=V2.z;
  }
  mul(x){
    this.x*=x
    this.y*=x
    this.z*=x
  }
 
}

function Group(){
  return new THREE.Group();
}

function GameObject(
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