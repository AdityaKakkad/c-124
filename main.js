function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(700,200);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#ffbf00');
}

function modelloaded(){
    console.log("PoseNet is initialised by 🤖.")
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
    else{
        console.log("ERROR🤖")
    }
}