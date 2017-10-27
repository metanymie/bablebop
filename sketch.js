/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                     *
 * Roxanne Baril-Bédard, Dikla Sinair and Emilia Mason *
 *                                                     *
 * Experiment 2: Bablebop, the election game           *
 *                                                     *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */


var b1radius = 150;
var b1tapped = false;
var b2tapped = false;
var b3tapped = false;
var crowntapped = 0;
var dirttapped = 0;
var crownclicked = false;
var dirtclicked = false;

var crownscore = " Crowns";
var dirtscore = " Dirt";

var bg2 = false;
var loop1 = false;
var loop2 = false;
var loop3 = false;
var loop4 = false;
var loop5 = false;
var loop6 = false;

var looptime = 0;
var roundtime = 15000 //240000; // 4 min
var looptime2 = 0;
var currentround = 0;
var laststretch = false;

var loopclick = 0;
var clicktime = 100;
var loopclick2 = 0;
var currentclick = 0;

var rng = 0;
var btnWidth = 0.0;
var btnHeight = 0.0;
var btnWidth2 = 0.0;
var btnY = 0.0;

// var btnWidthA = 0;
// var btnWidthB = btnWidth+8;
// var btnWidthC = btnWidth+12;
// var btnWidthD = btnWidth+16;
// var btnWidthE = btnWidth+20;

// var btnHeightA = btnWidth+4;
// var btnHeightB = btnWidth+8;
// var btnHeightC = btnWidth+12;
// var btnHeightD = btnWidth+16;
// var btnHeightE = btnWidth+20;

/* * * *  * * * * * *
 *  load the images *
* * * * * * * * * * */

function preload(){
  gamescreen = loadImage("assets/Game-screen.jpg");

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

  blimbgfin = loadImage("assets/blimfin.jpg");
  blobbgfin = loadImage("assets/blobfin.jpg");
  blarkbgfin = loadImage("assets/blarkfin.jpg");
  crownsml = loadImage("assets/crownSmall.png");
  dirtsml = loadImage("assets/dirtSmall.png");
}

function setup()
{
//createCanvas(1080,1920);
  rng = random (1,9);
  createCanvas(windowWidth, windowHeight);

//make the button height in proportion to the width 
//which is in proportion to screen width
  btnWidth = 0.6*windowWidth;
  btnHeight = 0.829*btnWidth;
  btnWidth2 = 0.98146*btnHeight;

  btnY = 0.29*windowHeight;
  btnY2 = windowHeight-btnY

btnWidthA = btnWidth+4;
btnWidthB = btnWidth+8;
btnWidthC = btnWidth+12;
btnWidthD = btnWidth+16;
btnWidthE = btnWidth+20;

btnHeightA = btnWidth+4;
btnHeightB = btnWidth+8;
btnHeightC = btnWidth+12;
btnHeightD = btnWidth+16;
btnHeightE = btnWidth+20;

  
}


function draw()
{

/* * * *  * * * * * * * * * *
 * drawing the intro screen *
* * * * * * * * * * * * * * */

  if (loop1 == false){ //the things draw in the intro screen

   imageMode(CORNER);
    image(gamescreen, 0, 0, windowWidth, windowHeight);

    loop1 = true; // adding a variable so that it's less taxing for phone to loop
  }

  // we have to draw a background to remove the images, but let's not have it loop
  if (b1tapped == true && loop2 == false) {
    background (255);
    loop2 = true;
  }

/* * * * * * ** * * * * * * * *
 * card screen with character *
 * * * * * * * * * * * * ** * */ 

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

  else if (loop2 == true && rng >= 7 && rng <= 9 && loop3 == false) {
    image (blim, 0,0, windowWidth, windowHeight);
    rng = 3;
    loop3 = true;
  }

/* * * * *  * * * * * * * * * * * * * * *
 * load card screen back when b2 tapped *
 * * * * *  * * * * * * * * * * * * * * */

 if (b2tapped == true && rng == 1  && loop4 == false){
  image (blobback, 0, 0, windowWidth, windowHeight);
  loop4 = true;
 }

 else if (b2tapped == true && rng == 2 && loop4 == false){
  image (blarkback, 0, 0, windowWidth, windowHeight);
  loop4 = true;
 }

 else if (b2tapped == true && rng == 3 && loop4 == false){
  image (blimback, 0, 0, windowWidth, windowHeight);
  loop4 = true;
 }

 /* * * * * * * * * * * * * * * * * * * * * * * * * * *
 * tap game screen bg with the crown and dirt buttons *
 * * * * * * * * * * * * * * * * * * * * * * * * * *  */

 if (b3tapped == true && rng == 1 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blobbg, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

  loop5 = true;
  
  //start the timer
  looptime = Date.now();
 } 
 else if (b3tapped == true && rng == 2 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blarkbg, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

  loop5 = true;

  // start the timer
  looptime = Date.now();
 } 

 else if (b3tapped == true && rng == 3 && loop5 == false && loop4 == true){
  imageMode(CORNER);
  image (blimbg, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);
  
  loop5 = true;

  // start the timer
  looptime = Date.now();
 }

/* * * * *  * * * * * *
 * clicker timer loop *
 * * * * * * * * * ** */

if (crownclicked == true ){
  loopclick2 = Date.now();
  currentclick = loopclick2 - loopclick;
  
}

if (currentclick > clicktime ){
  imageMode(CENTER);
  image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
  image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

  currentclick = 0;
  crownclicked = false;
  dirtclicked = false;
}

if (dirtclicked == true ){
  loopclick2 = Date.now();
  currentclick = loopclick2 - loopclick;
}

 /* * * * * * * 
 * timer loop *
 * * * * * ** */

if (loop5 == true && loop6 == false){
  looptime2 = Date.now();
  currentround = looptime2 - looptime;
}


 /* * * * * * * * * * * * * * * * * * * * * *
 * pulsating button animation / not working *
 * * * * * ** * * * * * * * * * * * * * * * */

// if (currentround > 0.75*roundtime && loop6 == false){

//   frameRate(6);
  
//   imageMode(CENTER);
//   image(crownbtn, windowWidth/2, btnY, btnWidthA, btnHeightA);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

//   image(crownbtn, windowWidth/2, btnY, btnWidthB, btnHeightB);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

//   image(crownbtn, windowWidth/2, btnY, btnWidthC, btnHeightC);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

//   image(crownbtn, windowWidth/2, btnY, btnWidthD, btnHeightD);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

//   image(crownbtn, windowWidth/2, btnY, btnWidthD, btnHeightD);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidth, btnHeight);

//   image(crownbtn, windowWidth/2, btnY, btnWidthE, btnHeightE);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthA, btnHeightA);

//   image(crownbtn, windowWidth/2, btnY, btnWidthD, btnHeightD);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthB, btnHeightB);

//   image(crownbtn, windowWidth/2, btnY, btnWidthC, btnHeightC);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthC, btnHeightC);

//   image(crownbtn, windowWidth/2, btnY, btnWidthB, btnHeightB);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthD, btnHeightD);

//   image(crownbtn, windowWidth/2, btnY, btnWidthA, btnHeightA);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthE, btnHeightE);

//   image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthD, btnHeightD);

//   image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthC, btnHeightC);

//   image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthB, btnHeightB);

//   image(crownbtn, windowWidth/2, btnY, btnWidth, btnHeight);
//   image(dirtbtn, windowWidth/2, btnY2, btnWidthA, btnHeightA);
// }

 /* * * * * * * * 
 * score screen *
 * * * * * ** * */

  if (currentround > roundtime && rng == 1 && loop5 == true){
  imageMode(CORNER);
  image (blobbgfin, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownsml, windowWidth/2, btnY, 0.75*btnWidth, 0.75*btnHeight);
  image(dirtsml, windowWidth/2, btnY2, 0.75*btnWidth, 0.75*btnHeight);

  fill(0);
  textSize(32);
  textAlign(CENTER);
  text(crowntapped + crownscore, windowWidth/2, btnY+0.75*btnWidth/2+20);
  text(dirttapped + dirtscore, windowWidth/2, btnY2+0.75*btnWidth/2+20);

  loop6 = true;
  } 

  else if (currentround > roundtime && rng == 2 && loop5 == true){
  imageMode(CORNER);
  image (blarkbgfin, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownsml, windowWidth/2, btnY, 0.75*btnWidth, 0.75*btnHeight);
  image(dirtsml, windowWidth/2, btnY2, 0.75*btnWidth, 0.75*btnHeight);

  fill(0);
  textSize(32); 
  textAlign(CENTER);
  text(crowntapped + crownscore, windowWidth/2, btnY+0.75*btnWidth/2+20);
  text(dirttapped + dirtscore, windowWidth/2, btnY2+0.75*btnWidth/2+20);

  loop6 = true;
  } 

  else if (currentround > roundtime && rng == 3 && loop5 == true){
  imageMode(CORNER);
  image (blimbgfin, 0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  image(crownsml, windowWidth/2, btnY, 0.75*btnWidth, 0.75*btnHeight);
  image(dirtsml, windowWidth/2, btnY2, 0.75*btnWidth, 0.75*btnHeight);

  fill(0);
  textSize(32);
  textAlign(CENTER);
  text(crowntapped + crownscore, windowWidth/2, btnY+0.75*btnWidth/2+20);
  text(dirttapped + dirtscore, windowWidth/2, btnY2+0.75*btnWidth/2+20);

  loop6 = true;
  }


} // bottom bracket draw




/* * * * * * * * * *
 * button clicking *
 * * * * * * * * * */ 

 var last_press = 0;

// When the user clicks the mouse 
function mousePressed() {

  // Check if mouse is inside the circle
  // var d = dist(mouseX, mouseY, windowWidth/2,1000+b1radius/2);
  
  if (touchY >= windowHeight-windowHeight/6 && loop1 == true) {
    b1tapped = true;
  }

  // clicking on the card screen
  if (mouseY >= windowHeight-windowHeight/3 && loop3 == true){
    b2tapped = true;
  }

  // clicking on the back of the card screen
  if (mouseY >= windowHeight-windowHeight/6 && loop4 == true){
    b3tapped = true;
  }

  var dcrown = dist(mouseX, mouseY, windowWidth/2, btnY);
  var ddirt = dist(mouseX, mouseY, windowWidth/2, windowHeight-btnY);

    if (dcrown < btnHeight/2 && loop5 == true && !loop6){
      crowntapped += 1;
      print("crown tapped: " + crowntapped);

      noStroke();
      fill(255,255,255,100);
      ellipse(windowWidth/2,btnY,btnWidth2,btnHeight);

      // start anim timer
      loopclick = Date.now();
      crownclicked = true;
    }

    if (ddirt < btnHeight/2 && loop5 == true && !loop6){
      dirttapped += 1;
      print("dirt tapped: " + dirttapped);

      noStroke();
      fill(255,255,255,100);
      ellipse(windowWidth/2,windowHeight-btnY,btnWidth2,btnHeight);

      // start anim timer
      loopclick = Date.now();
      dirtclicked = true;
    }

  }


function touchStarted()
{
  // var d = dist(touchX, touchY, windowWidth/2,1000+b1radius/2);

  // var this_press = Date.now();
  // console.log(this_press-last_press);

  //if (last_press - this_press > 500){

    if (touchY >= windowHeight-windowHeight/6 && loop1 == true) {
      b1tapped = true;
    }


    if (touchY >= windowHeight-windowHeight/3 && loop3 == true){
      b2tapped = true;
    }

    if (touchY >= windowHeight-windowHeight/6 && loop4 == true){
      b3tapped = true;
    }

    //touching the crown and dirt buttons

    var dcrown = dist(touchX, touchY, windowWidth/2, btnY);
    var ddirt = dist(touchX, touchY, windowWidth/2, windowHeight-btnY);

    if (dcrown < btnHeight/2 && loop5 == true && !loop6){
      crowntapped += 1;
      print("crown tapped: " + crowntapped);

      noStroke();
      fill(255,255,255,100);
      ellipse(windowWidth/2,btnY,btnWidth2,btnHeight);

      // start anim timer
      loopclick = Date.now();
      crownclicked = true;
    }

    if (ddirt < btnHeight/2 && loop5 == true && !loop6){
      dirttapped += 1;
      print("dirt tapped: " + dirttapped);

      noStroke();
      fill(255,255,255,100);
      ellipse(windowWidth/2,windowHeight-btnY,btnWidth2,btnHeight);

      // start anim timer
      loopclick = Date.now();
      dirtclicked = true;
    }
    //last_press = this_press;
  //}
  

}
