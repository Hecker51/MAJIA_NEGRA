nX = 0;
nY = 0;
difference = 0;
dX = 0;
eX = 0;

function setup() {
  canvas = createCanvas(550, 550);
  canvas.position(560, 150);
  
  video = createCapture(VIDEO);
  video.size(550, 500);



  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}





function modelLoaded() {
  console.log('serto');
}


function gotPoses(results) {

  if (results.length > 0) {
    console.log(results);
   nX = results[0].pose.nose.x
   nY = results[0].pose.nose.y
 dX = results[0].pose.rightWrist.x
 eX = results[0].pose.leftWrist.x
 
 difference = floor(eX - dX)

 fill("#f2faf8")
stroke("#f2faf8")
}



}




function draw() {
  background('#969A97');
  square(nX,nY, difference)
}
