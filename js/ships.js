class Ships{
    constructor(x,y,width,height,boatpos){

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boatpos = boatpos
        var options = {

            restitution:0.8, friction:1.0,density:1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.image = loadImage("./assets/ship.png")


    }
    display(){

        var angle = this.body.angle
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,this.boatpos,this.width,this.height)
        pop()

    }
    

    


}