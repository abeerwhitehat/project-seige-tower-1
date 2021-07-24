
class Slingshot{
constructor(bodyA,bodyB){
var options = {
    bodyA: bodyA,
    pointB:bodyB,
    stiffness: 0.04,
    length:1.0,
}
this.pointB=bodyB
this.sling = Constraint.create(options);
World.add(world, this.sling);
}

fly(){
    this.sling.bodyA = null;

}

display(){

if(this.sling.bodyA){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;

strokeWeight(4);
fill("red");
line(pointA.x, pointA.y, pointB.x, pointB.y);


}
}
}