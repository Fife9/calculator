function halfNumber(inputContents) {
  var result;
  var inputContents = document.getElementById("half-input").value;
  result = inputContents/2;
  alert("Half of " + inputContents + " is " + result)
}

function fortune(inputContents) {
  var inputContents = document.getElementById("fortune-input").value;
  var fortunePhrase = [", You will come into some unexpected wealth", ", The wise can still ask questions", ", We become what we think is right"];
  var randomFortune = Math.floor(Math.random() * fortunePhrase.length);
  document.getElementById("fortune-output").innerHTML = inputContents + fortunePhrase[randomFortune];
}

function restyle(){
myElement = document.getElementById("fortune-output");
var fontColor = ["red", "blue", "green", "yellow"]
var fontFamily = ["serif", "san-serif"]
var fontSize = ["20px", "10px", "5px"]
var randomColor = Math.floor(Math.random() * fontColor.length);
var randomSize = Math.floor(Math.random() * fontSize.length);
var randomFamily = Math.floor(Math.random() * fontFamily.length);
myElement.style.color = "fontColor[randomColor]";
myElement.style.fontFamily = "fontFamily[randomFamily]";
myElement.style.fontSize = "fontSize[randomSize]";
}
