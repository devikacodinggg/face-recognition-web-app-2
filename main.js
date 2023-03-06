Webcam.set({
  width:350, 
  height:300,
  image_format:"png",
  png_quality:90
});

Webcam.attach("#camera");




classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hlgiuG_3Q/",model_loaded);


function model_loaded(){
  console.log("Model is loaded");
}


function check(){
  img = document.getElementById("captured_selfie");

  classifier.classify(img, gotResult);
}
function capture(){
  Webcam.snap(function(pic_uri){
    document.getElementById("cpature").innerHTML="<img id ='capture'  src = '" + pic_uri + "'>";
});

}

function gotResult(error,results){

  if (error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    accuracy = Math.floor((results[0].confidence)*100);
    document.getElementById("result_object_accuracy").innerHTML = accuracy + "%";
    
  }


}