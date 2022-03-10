// variable counts the number of times the drum class is called in index.html
var numOfDrumButtons = document.querySelectorAll(".drum").length;

// variable i equals 0
// while i is less than the number of drum buttons, increment i by 1
for (var i = 0; i < numOfDrumButtons; i++) {
  // detects button click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// detects keyboard press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log();

  }
}

// animation added to button click and keypress
// css style is added to button for 100ms when pressed
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
