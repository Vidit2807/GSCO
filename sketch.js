
var car,wall,car2,wall2,wall3,car3,line2,line3,line,line4,speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(30, 70, 50, 50);
wall=createSprite(720,70,20,80);
car2=createSprite(30, 170, 50, 50);
wall2=createSprite(720,170,20,80);
car3=createSprite(30, 270, 50, 50);
wall3=createSprite(720,270,20,80);
 line=createSprite(400,120,800,5);
 line4=createSprite(400,20,800,5);
 line2=createSprite(400,220,800,5);
 line3=createSprite(400,320,800,5);
 line.shapeColor="white";
 line2.shapeColor="white";
 line4.shapeColor="white";
 line3.shapeColor="white";
 speed=random(55,90)
 speed3=random(55,90)
 speed2=random(55,90)
 weight2 = random(400,1500)
 weight3 = random(400,1500)
 weight = random(400,1500)
}

function draw() {
  background("Black");
  car.collide(wall);
  car2.collide(wall2);
  car3.collide(wall3);
  car.velocityX=speed;
  car2.velocityX=speed2;
  car3.velocityX=speed3;
  if(wall.x-car.x<(car.width+wall.width)/2&& (wall2.x-car2.x<(car2.width+wall2.width)/2)&&(wall3.x-car3.x<(car3.width+wall3.width)/2))
  {car.velocity=0;
    car3.velocity=0;
    car2.velocity=0;
    car.weight=1400;
    car.weight=1400;
    car3.weight=1400;
    var deformation=0.5 * weight * speed * speed/22500;
    var deformation2=0.5 * weight2 * speed2 * speed2/22500;
    var deformation3=0.5 * weight3 * speed3 * speed3/22500;
     if((deformation>180) && (deformation3>180)&&(deformation2>180)){
car.shapeColor="red";
car2.shapeColor="red";
car3.shapeColor="red";
     }
     if((deformation<100)&&(deformation<100)&&(deformation<100)){
      car.shapeColor="green";
      car2.shapeColor="green";
      car3.shapeColor="green";
           }
           if((deformation<180 && deformation>100)&&(deformation<180 && deformation>100)&&(deformation<180 && deformation>100)){
            car.shapeColor="yellow";
            car2.shapeColor="yellow";
            car3.shapeColor="yellow";
                 }
    drawSprites();
                }
  
}