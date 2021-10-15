class Rules {
    constructor(x, y, width, height) {
        /*var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);*/
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("rules.png");
        this.Visibility = 0;
        //World.add(world, this.body);
    }
    display() {
        frameRate(120);
        //push();
        //translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        this.Visibility = this.Visibility + 9;
        tint(255, 255, 255, this.Visibility);
        image(this.image, this.x, this.y, this.width, this.height);
        //pop();
    }
}