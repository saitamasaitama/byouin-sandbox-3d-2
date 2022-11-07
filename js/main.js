const h= 36;
const w= 36;
const size=100;
const $Scene=Scene.CreateScene()
const $Debug=$("#Debug")
const G=Group();
const Items=[]

for(let i=0;i<size;i++){

}
$Scene.add(G);

const sphere=Primitive.Sphere(0xbb0000);
sphere.position.x=5
$Scene.add(sphere);
const cylinder=Primitive.Cylinder(0xbb0066);
cylinder.position.x=-5
$Scene.add(cylinder)

InputSet()
setInterval(function(){$Scene.Update(
 function(delta){
 	sphere.position.x-=delta*4
 }
)},33)