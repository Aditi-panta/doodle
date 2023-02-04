function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    background("white");
}
function clearCanvas(){
    background("white");
}
function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}