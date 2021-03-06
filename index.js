//Creating a loop for the action "click" to activate alert on each button.
//First is the var with length of buttons
var numberOfButtons = document.querySelectorAll(".drum").length;

//Next comes the loop with eventListener and Switch statements.
for (var i = 0; i < numberOfButtons; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function(event){

    makeSound(event.path[0].innerHTML);

    buttonAnimation(event.path[0].innerHTML);

  })
}
//Now we create a function which will output the key pressed into makeSound(key) function.
  document.addEventListener("keydown", function(evt){

    makeSound(evt.key);

    buttonAnimation(evt.key);

})


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;


      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;



    default: console.log(key);
 }
}



function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
