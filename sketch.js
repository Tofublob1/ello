const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
var cannonBall;
/*var num=[1,2,3,4,5]
console.log(num)
var diff=[true,1,7,4,"hi",false]
console.log(diff[5])
var many=[[8,9,7],[4,4,1],[1,22,67]]
console.log(many[2][1])
diff.push("hy")
console.log(diff)
many.pop()
console.log(many)*/
var balls=[]
var shiips=[]

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);
  cannon = new Cannon(180, 110, 130, 100, angle);
  //cannonBall = new CannonBall(cannon.x, cannon.y);
  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();
  showshiips()
  for(var  i=0;i<balls.length;i++){
  showCannonBalls(balls[i],i)
}
  cannon.display();
  //cannonBall.display();
  
}


function keyReleased() {
  if (keyCode === DOWN_ARROW)
   {
    balls[balls.length-1].shoot();
  }
}

function keyPressed()
{
  if (keyCode === DOWN_ARROW){
    var cannonBall=new CannonBall(cannon.x,cannon.y)
    balls.push(cannonBall)

    
  }
}

function showCannonBalls(ball,i)
{
  if (ball)
  {
    
    ball.display()

  }
}

function showshiips(){

        if(shiips.length>0){

          if(shiips[shiips.length-1]===undefined || shiips[shiips.length-1].body.position.x<width-300){
            var positions=[-40,-60,-70,-20]
            var position = random(positions)
            var ship=new Ships(width,height-100,170,170,position)
            shiips.push(ship)
          }
            for(var i = 0;i<shiips.length;i++){
                if(shiips[i]){
                  Matter.Body.setVelocity(shiips[i].body,{x:-0.9,y:0})
                  shiips[i].display
                }
            }
        }
        else{
          var ship = new Ships(width-80,height-60,170,170,-100)
          shiips.push(ship)
        }
}