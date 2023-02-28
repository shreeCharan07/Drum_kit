var numberOfdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfdrums; i++) {

  // this code is for when the button is pressed the function gets called button i.e, click from the mouse

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;  //  In JavaScript, the this keyword refers to an object(identity of that element).
                                          //Which object depends on how this is being invoked (used or called)
    Makesounds(buttonInnerHTML);
    makesanimation(buttonInnerHTML);


  });


}




/// this code is for keyboard press i.e, detecting which key is pressed in the keyboard
document.addEventListener("keydown",function(event){
  Makesounds(event.key);  //keydown shows that the key was pressed and event triggers
                          //which key was pressed using function
  makesanimation(event.key);

});


function Makesounds(key){
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

    default: console.log(buttonInnerHTML);

  }
}


function makesanimation(currentkey){

  var activeButton = document.querySelector("." + currentkey)
  activeButton.classList.add("pressed"); // way of adding class into a javascript and applying that particular class

  setTimeout(function(){  //setTimeout is just adding the delay
    activeButton.classList.remove("pressed"); // way of removing a class
  },100);

}
