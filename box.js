class Box{
    constructor(x,y,width,height,color){
        var options = {
            'restitution':0.02,
            'friction': 1,
            'density': 1 
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.visibility= 255;
        World.add(world, this.body);
    }
    display(){
        console.log(this.body.speed);
        if(this.body.speed<20){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
            World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          pop();  
        }
        
    }
}
