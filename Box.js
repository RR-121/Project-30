class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setStatic(this.body, false);
    this.Visibility = 255;
  }
  display() {
    //fill("tan");
    if(this.body.speed < 3) {
      super.display();
    }
    else {
      push();
      World.remove(world, this.body);
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility);
      pop();
    }
  }
};
