class Ground{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.02,
            'friction': 1,
            'density': 1,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //push();
        rectMode(CENTER);
        //translate(pos.x,pos.y);
        //rotate(angle);
        fill("Brown");
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
    }
}