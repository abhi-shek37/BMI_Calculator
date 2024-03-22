function Calculate(){
 var height = document.getElementById("height").value /100;
 var weight = document.getElementById("weight").value;
 var result = (weight)/(height*height);
 
 if(result <= 18.4){
   document.getElementById("result").innerText = ("Your BMI is " + result.toFixed(1) + " Which means You are UnderWeight");

 }else if(result >= 18.5 && result <= 24.9){
    document.getElementById("result").innerText = ("Your BMI is " + result.toFixed(1) + " Which means You are NormalWeight");

 }else if(result >= 25 && result <= 29.9){
    document.getElementById("result").innerText = ("Your BMI is " + result.toFixed(1) + " Which means You are OverWeight");

 }else{
    document.getElementById("result").innerText = ("Your BMI is " + result.toFixed(1) + " Which means You are Obese");

 }
}