var iss, sc, spbg, spbg2, sc1, sc2, sc3, sc4,iss2


function preload()
{
  spbg2 = loadImage("spacebg.jpg")
  iss2 = loadImage("iss.png")
  sc1 = loadImage("spacecraft1.png")
  sc2 = loadImage("spacecraft2.png")
  sc3 = loadImage("spacecraft3.png")
  sc4 = loadImage("spacecraft4.png")
}



function setup() {
  createCanvas(displayWidth, displayHeight);
  

 iss =  createSprite(400, 200, 50, 50);
 iss.addImage(iss2)
 iss.scale = 0.6
 sc =  createSprite(displayWidth/2, displayHeight/2, 50, 50);
 sc.addImage(sc1)
 sc.scale = 0.4


 



}





function draw() {
  background(spbg2);     

  sc.addImage(sc1)

if(keyDown("LEFT_ARROW"))
{
  sc.x = sc.x - 5
  sc.addImage(sc3)
}

if(keyDown("RIGHT_ARROW"))
{
  sc.x = sc.x + 5
  sc.addImage(sc4)
}

if(keyDown("UP_ARROW"))
{
  sc.y = sc.y - 5
  sc.addImage(sc2)
}

if(keyDown("DOWN_ARROW"))
{
  sc.y = sc.y  + 5
  sc.addImage(sc2)
}
            



if(sc.y<=(iss.y + 100) && sc.x<=(iss.x - 50))
{
  fill ("#FF0000")
  textSize(50)
  text("DOCKING SUCCESSFUL", displayWidth/2, displayHeight/2)
}








  






  drawSprites();















  
}