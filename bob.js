class bob {
    constructor(diameter) {
      var options = {
          density:1.0,
          friction:1.0,
          //restitution:0.8
          //isStatic:true
      }
      this.body = Bodies.circle(200,200,diameter);
      this.diameter=diameter;
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      // this.body.position.x = mouseX;
      // pos.y=mouseY;
      
      fill("blue");
      circle(pos.x, pos.y, this.diameter);
    }
    display1(){
      this.body.position.x=200;
      this.body.position.y=200;
    }
  }