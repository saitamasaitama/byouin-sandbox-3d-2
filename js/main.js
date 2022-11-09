const h= 36;
const w= 36;
const size=100;
const radius=15
const $Scene=Scene.CreateScene()
const $Debug=$("#Debug")
const G=Group();
const Items=[]

for(let i=0;i<12;i++){
   	const q=Quaternion.Euler(0,i/6*Math.PI,0)
   	const v=Vector3.Forward(7)
   	const v2=v.applyEuler(q)
  	const sphere=Primitive.Sphere(0xbb0000);
	sphere.position.x=v2.x
	sphere.position.y=v2.y
	sphere.position.z=v2.z
	$Scene.add(sphere);
}
$Scene.add(G);

const sphere=Primitive.Sphere(0x000088,radius-0.1);
$Scene.add(sphere);
const cylinder=Primitive.Cylinder(0xbb0066);

cylinder.position.y=radius
$Scene.add(cylinder)
const circle=Primitive.Circle(0x008866,20);
circle.rotation.x=-0.5*Math.PI
//$Scene.add(circle)

const PrefCoordinates=[];
for(let i=0;i<47;i++){

	PrefCoordinates.push(PrefGeoMaster.features[i].geometry.coordinates)
}

for(let i=0;i<47;i++){
for(let j=0;j<PrefCoordinates[i].length;j++) {
for(let k=0;k<PrefCoordinates[i][j].length;k++) { 
			const points=[];
			for(const item of PrefCoordinates[i][j][k]){
			    const lat=item[0]
				const lon=item[1]
				
				const v =Vector3.FromLatLong(lat,lon,radius);
				
				points.push(v);
			}
			$Scene.add(Primitive.Line(0xFF0000,3,points))
			
		}
	}
}

$Scene.add(Primitive.LineRing())
$Scene.add(Primitive.LineRingY())

InputSet()
setInterval(function(){$Scene.Update(
 function(delta){
 	//$Scene.rotation.y-=delta*4
 }
)},33)