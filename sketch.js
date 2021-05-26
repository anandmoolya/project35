dog, happyDog, database, foodS, foodStock;


function preload()
{
 dogImg= loadImage("images/dogImg.png");
 dogImg1= loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=firebase.database.ref("food")
foodStock.no("value",readStock)
foodStock.set(20);

dog=createSprite(250,350,10,60)
dog.addImage(dogImg)
dog.scale=0.3
 
}


function draw() {  

background("lightgreen")
 
 if(keyWentDown(up_arrow)){
 writeStock(foods)
 dog.addImage(dogHappy)
 
 }

 
  drawSprites();
}

function readStock(data){

  foodS=data.val();

}

function writeStock(x){

database.ref('/') .update({

food:x

})

if(x<=0){
  x=0;
}else{

  x-x1;
}



}

