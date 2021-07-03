function preload(){
    
}
function setup(){
    canvas=createCanvas(400,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rHhpL03RH/model.json",modelloaded)
}
function draw(){
    image(video,0,0,400,400)
    classifier.classify(video,gotresults)
}
function modelloaded() {
    console.log("model has loaded")
}
function gotresults(error,result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("objetresults").innerHTML=result[0].label
        document.getElementById("acuracyresult").innerHTML=result[0].confidence.toFixed(3)
    }
}
