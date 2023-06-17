var alarmClock,time,button,alarmClockimg,score=0,startButton, stopButton
// top score  img x & y is 314,80

function preload(){
    alarmClockimg = loadImage("xedited.png");

}
function setup (){
    canvas = createCanvas(400,400);
 
  startButton=createSprite(120, 40, 60,50) 
  startButton.shapeColor="green"

text(score+"ms",200,200)
    alarmClock = createSprite(200,200,20,50);
  
  alarmClock.addAnimation("xedited", alarmClockimg)
  alarmClock.scale = 1.0

}

function draw(){
  background("#00FA9A")
   if(mousePressedOver(startButton)){
start()
}
 textSize(20)
    drawSprites()
text(score+"   ms",200,200) 
text("start",110, 40);
    text("stop",210, 40)
}s
 function start(){
score+=1
}
