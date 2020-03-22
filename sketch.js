const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var wall1,cannon;








function setup() {
 var canvas= createCanvas(1200,670);
  engine = Engine.create();
  world = engine.world;

  Wall1=new Wall(120,200,60,500);
  Wall2=new Wall(190,280,60,580);
  Wall3=new Wall(260,200,60,500);
  Wall4=new Wall(330,280,60,580);
  Wall5=new Wall(400,200,60,500);
  Wall6=new Wall(470,280,60,580);
  Wall7=new Wall(540,200,60,500);
  Wall8=new Wall(610,280,60,580);
  Wall9=new Wall(680,200,60,500);
  Wall10=new Wall(750,280,60,580);
  Wall11=new Wall(820,200,60,500);
  Wall12=new Wall(890,280,60,580);
  Wall13=new Wall(960,200,60,500);
  Wall14=new Wall(1030,280,60,580);
  Wall15=new Wall(1100,200,60,500);
  RoofWall=new Wall(110,150,1050,20);
  Wall16=new Wall(460,70,60,100);
  Wall17=new Wall(520,70,60,100);
  Wall18=new Wall(580,70,60,100);
  Wall19=new Wall(640,70,60,100);
  Wall20=new Wall(700,70,60,100);
  

  Cannon1=new Cannon(110,170,70,30);
  Cannon2=new Cannon(250,170,70,30);
  Cannon3=new Cannon(390,170,70,30);
  Cannon4=new Cannon(530,170,70,30);
  Cannon5=new Cannon(670,170,70,30);
  Cannon6=new Cannon(810,170,70,30);
  Cannon7=new Cannon(950,170,70,30);
  Cannon8=new Cannon(1090,170,70,30);

  FlagStand1=new FlagStand(130,100,5,50);
  FlagStand2=new FlagStand(1130,100,5,50);
  Flag1=new Flag(70,90,60,30);
  Flag2=new Flag(1135,90,60,30);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  Wall1.display();
  Wall2.display();
  Wall3.display();
  Wall4.display();
  Wall5.display();
  Wall6.display();
  Wall7.display();
  Wall8.display();
  Wall9.display();
  Wall10.display();
  Wall11.display();
  Wall12.display();
  Wall13.display();
  Wall14.display();
  Wall15.display();
  Wall16.display();
  Wall17.display();
  Wall18.display();
  Wall19.display();
  Wall20.display();
  
  
  Cannon1.display();
  Cannon2.display();
  Cannon3.display();
  Cannon4.display();
  Cannon5.display();
  Cannon6.display();
  Cannon7.display();
  Cannon8.display();

  RoofWall.display();
  FlagStand1.display();
  FlagStand2.display();
  Flag1.display();
  Flag2.display();
 
}