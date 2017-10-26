/*
 * Roxanne Baril-Bédard
 * Exercise in p5js: election game
 */


var b1radius = 150;
var b1tapped = false;
var b2tapped = false;
var b3tapped = false;
var bg2 = false;
var loop1 = false;
var loop2 = false;
var loop3 = false;
var loop4 = false;
var loop5 = false;
var rng = 0;
var btnWidth = 0.0;
var btnHeight = 0.0;
var btnY = 0.0;

/* * * *  * * * * * *
 *  load the images *
* * * * * * * * * * */

function preload(){
  sscreen = loadImage("assets/splashscreen.png");
  img2 = loadImage("assets/ssbutton.png");

  blim = loadImage("assets/blim.jpg");
  blob = loadImage("assets/blob.jpg");
  blark = loadImage("assets/blark.jpg");

  blimback = loadImage("assets/blim-back.jpg");
  blobback = loadImage("assets/blob-back.jpg");
  blarkback = loadImage("assets/blark-back.jpg");

  blimbg = loadImage("assets/BGblim.jpg");
  blobbg = loadImage("assets/BGblob.jpg");
  blarkbg = loadImage("assets/BGblark.jpg");
  crownbtn = loadImage("assets/GiveCrown.png");
  dirtbtn = loadImage("assets/GiveDirt.png");

}

function setup()
{
//createCanvas(1080,1920);
  rng = random (1,10);
  createCanvas(windowWidth, windowHeight);

//make the button height in proportion to the width 
//which is in proportion to screen width
  btnWidth = 0.781*windowWidth;
  btnHeight = 0.829*btnWidth;

  btnY = 0.298*windowHeight;
  
}


function draw()
{

/* * * *  * * * * * * * * * *
 * drawing the intro screen *
* * * * * * * * * * * * * * */

	if (loop1 == false){ //the things draw in the intro screen

   imageMode(CORNER);
    image(sscreen,100,100);

    imageMode(CENTER);
    image(img2,windowWidth/2,1000+b1radius/2);
    loop1 = true; // adding a variable so that it's less taxing for phone to loop
  }

  // we have to draw a background to remove the images, but let's not have it loop
  if (b1tapped == true && loop2 == false) {
    background (255);
    loop2 = true;
  }

/* * * * * * * * 
 * card screen *
 * * * * * * * */ 

 imageMode(CORNER);

  if (loop2 == true && rng >= 1 && rng <= 3 && loop3 == false) {
    image (blob, 0,0,windowWidth, windowHeight);
    rng = 1;
    loop3 = true;
  } 
  else if (loop2 == true && rng >= 4 && rng <= 6 && loop3 == false) {
    image (blark, 0,0,windowWidth, windowHeight);
    rng = 2;
    loop3 = true;
  } 
  else if (loop2 == true && rng >= 7 && rng <= 10 && loop3 == false) {
    image (blim, 0,0, windowWidth, windowHeight);
    rng = 3;
    loop3 = true;
	}

/* * * * *  * * * * * * * * * * * * * * *
 * load card screen back when b2 tapped *
 * * * * *  * * * * * * * * * * * * * * */

 if (b2tapped == true && rng == 1  && loop4 == false){
  image (blobback, 0,0, windowWidth, windowHeight);
  loop4 = true;
 } 
 else if (b2tapped == true && rng == 2 && loop4 == false){
  image (blarkback, 0,0, windowWidth, windowHeight);
  loop4 = true;
 } 
 else if (b2tapped == true && rng == 3 && loop4 == false){
  image (blimback, 0,0, windowWidth, windowHeight);
  loop4 = true;
 }

 /* * * * * * * * * * *
 * tap game screen bg *
 * * * * * * * * * ** */

 if (b3tapped == true && rng == 1 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blobbg, 0,0,windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, windowHeight/3, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, 2 * windowHeight/3, btnWidth, btnHeight);

  loop5 = true;
 } 
 else if (b3tapped == true && rng == 2 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blarkbg, 0,0,windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, windowHeight/3, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, 2 * windowHeight/3, btnWidth, btnHeight);

  loop5 = true;
 } 
 else if (b3tapped == true && rng == 3 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blimbg, 0,0,windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, windowHeight-btnY, btnWidth, btnHeight);
  
  loop5 = true;
 }

} // bottom bracket draw



/* * * * * * * * * *
 * button clicking *
 * * * * * * * * * */ 

// When the user clicks the mouse 
function mousePressed() {

  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, windowWidth/2,1000+b1radius/2);
  if (d < b1radius/2 && loop1 == true) {
    b1tapped = true;
  }
  // clicking on the card screen
  if (mouseY >= windowHeight-windowHeight/3 && loop2 == true){
    b2tapped = true;
  }

  // clicking on the back of the card screen
  if (mouseY >= windowHeight-windowHeight/6 && loop3 == true){
    b3tapped = true;
  }

  }


function touchStarted()
{
  var d = dist(touchX, touchY, windowWidth/2,1000+b1radius/2);

  if (d < b1radius/2 && loop1 == true) {
    b1tapped = true;
  }


  if (touchY >= windowHeight-windowHeight/3 && loop3 == true){
    b2tapped = true;
  }

  if (touchY >= windowHeight-windowHeight/6 && loop4 == true){
    b3tapped = true;
  }
}


