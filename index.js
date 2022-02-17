/*
 My personal solution without using udemy solution.
var handleClick = [];
handleClick[0] = crash;
handleClick[1] = kick;
handleClick[2] = snare;
handleClick[3] = tom1;
handleClick[4] = tom2;
handleClick[5] = tom3;
handleClick[6] = tom4;
var audio1 = new Audio("sounds/crash.mp3");
var audio2 = new Audio("sounds/kick-bass.mp3");
var audio3 = new Audio("sounds/snare.mp3");
var audio4 = new Audio("sounds/tom-1.mp3");
var audio5 = new Audio("sounds/tom-2.mp3");
var audio6 = new Audio("sounds/tom-3.mp3");
var audio7 = new Audio("sounds/tom-4.mp3");

// to handle click on image.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick[i]);
}

function crash() {
  audio1.play();
}

function snare() {
  audio2.play();
}

function kick() {
  audio3.play();
}

function tom1() {
  audio4.play();
}

function tom2() {
  audio5.play();
}

function tom3() {
  audio6.play();
}

function tom4() {
  audio7.play();
}

//to handle keyboard.
document.addEventListener("keydown", pressed);
function pressed()
{
var key1=event.key;
switch (key1) {
  case 'w':

    var audio1 = new Audio("sounds/crash.mp3");
    audio1.play();
    break;
  case 'a':
    var audio2 = new Audio("sounds/kick-bass.mp3");
    audio2.play();
    break;
  case 's':
    var audio3 = new Audio("sounds/snare.mp3");
    audio3.play();
    break;
  case 'd':
    var audio4 = new Audio("sounds/tom-1.mp3");
    audio4.play();
    break;
    case 'j':
    var audio5 = new Audio("sounds/tom-2.mp3");
    audio5.play();

      break;
      case 'k':
        var audio6 = new Audio("sounds/tom-3.mp3");
          audio6.play();
        break;
case 'l':
var audio7 = new Audio("sounds/tom-4.mp3");
audio7.play();
break;




}
}
function buttonAnimation(key)
{
var activeButton=document.querySelector("."+key);
document.querySelector("."+key).classList.toggle("pressed");
}


*/


//for handling click on images.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var button=this.innerHTML;
  makeSound(button);
  buttonAnimation(button);
}
//to handle key press.
document.addEventListener("keydown", pressed);
function pressed()
{
makeSound(event.key);
buttonAnimation(event.key);
}

function makeSound(key) {

  switch (key) {
    case 'w':

      var audio1 = new Audio("sounds/crash.mp3");
      audio1.play();
      break;
    case 'a':
      var audio2 = new Audio("sounds/kick-bass.mp3");
      audio2.play();
      break;
    case 's':
      var audio3 = new Audio("sounds/snare.mp3");
      audio3.play();
      break;
    case 'd':
      var audio4 = new Audio("sounds/tom-1.mp3");
      audio4.play();
      break;
      case 'j':
      var audio5 = new Audio("sounds/tom-2.mp3");
      audio5.play();

        break;
        case 'k':
          var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
          break;
case 'l':
var audio7 = new Audio("sounds/tom-4.mp3");
  audio7.play();
  break;




  }
}

function buttonAnimation(key)
{
var activeButton=document.querySelector("."+key);
//document.querySelector("."+key).classList.toggle("pressed"); OR
activeButton.classList.toggle("pressed");
setTimeout(function(){activeButton.classList.toggle("pressed");},100);
}
