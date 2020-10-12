class Box {

    constructor(x,y,width,height){

        var box_options = {
            restitution : 1 , friction : 0.8 , isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width, height, box_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");
        World.add(myworld,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER);
        push();
        translate(position.x,position.y);   
        rotate(angle);
        image(this.image , this.width/2 , this.height/2 );
        pop();
    }



}