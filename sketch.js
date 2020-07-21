//Create variables here
var dog;
var happyDog;
var dataBase,foods;
var foodStock,foodS;

function preload()
{
  //load images here
  dog_img=loadImage("images/dogImg.png");
  dogImg1=loadImage("images/dogImg1.png");
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
   database.ref('/').update({
     Food:x
     
   })

}

function setup() {
  database=firebase.database();
  
  createCanvas(500, 500);
  dog = createSprite(250,300,10,10);
  dog.addImage(dog_img);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {  
  background("green");

  noStroke();
  textSize(20)
  fill("white")
  text("Note-Press UP_ARROW KEY TO Feed Dragon Milk!",width-480, 25);

  noStroke();
  textSize(15)
  fill("white")
  text("Food remaining:"+foodS,150,150);

  dog.display();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
}





