img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
GameStatus="";

function preload() {
	img=loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
  
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
function game(){
	console.log("noseX = " + noseX +", noseY = " + noseY);
}
function startGame(){
	GameStatus="start";
	document.getElementById("status").innerHTML="Game Is Loading (PLAY NOW !!!!!!!!!!!!!!!!)"
}
function modelLoaded() {
  console.log('Model Loaded!');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	  console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
  
  }
}
function draw() {
	game()
	if(noseX < 300)
  {
    marioX = marioX - 1;
  }
  if(noseX > 300)
  {
    marioX = marioX + 1;
  }
  if(noseY < 150)
  {
    marioY = marioY - 1;
  }
  image(img,marioX, marioY, 40,70);
}






