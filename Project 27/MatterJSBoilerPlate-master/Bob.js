class Bob {
    constructor (x,y,r){
   
     var options = {
         isstatic:false,
         restituition:1.0,
         friction :0,
         density : 0.8
     }
  
  
     this.bob = Bodies.circle(x,y,r,options);
     this.r = r
     World.add(world,this.bob)
  
  
    }
  
  display () {
  var pos = this.bob.position
  var angle = this.bob.angle
  push()
      translate(pos.x,pos.y)
      rotate(angle)
      strokeWeight ("3")
      stroke ("black")
      fill ("purple")
      ellipseMode(RADIUS);
      ellipse(0, 0 ,this.r,this.r)
    pop();
      
  }
  }