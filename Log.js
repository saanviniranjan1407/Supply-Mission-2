class Log{
  constructor(x,y,width,height){
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;

    World.add(world,this.body);
  }

  display(){
    var bd = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(bd.x,bd.y,this.width,this.height);
  }
}