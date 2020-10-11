class Box1 {
  constructor(x, y, width, height, angle) {
    var options = {
      'restitution': 0.5,
      'friction': 0.5,
      'density': 0.05
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display() {
    if (this.body.speed < 5) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#00FF01")
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 1;
      tint(255, this.Visibility);
      rectMode(CENTER);
      fill("#00FF01")
      rect(-25, -25, this.width, this.height);
      pop();
    }
  }
  display2() {
    if (this.body.speed < 5) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#FE0000")
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 1;
      tint(255, this.Visibility);
      rectMode(CENTER);
      fill("#FE0000")
      rect(-25, -25, this.width, this.height);
      pop();
    }
  }
  display3() {
    if (this.body.speed < 5) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#FBFF0A")
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 1;
      tint(255, this.Visibility);
      rectMode(CENTER);
      fill("#FBFF0A")
      rect(-25, -25, this.width, this.height);
      pop();
    }
  }
  display4() {
    if (this.body.speed < 5) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#6F00FF")
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 1;
      tint(255, this.Visibility);
      rectMode(CENTER);
      fill("#6F00FF")
      rect(-25, -25, this.width, this.height);
      pop();
    }
  }
  score() {
    fill("Red");
    noStroke();
    textSize(25);
    
    if (this.Visibility < 0 && this.Visibility >= -10) {
      score = score + 1;
    }
    text("Score: " + score, width - 400, 50);
  }
}