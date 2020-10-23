var buttons = document.querySelectorAll(".drum")
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleclicked);
}
function handleclicked() {
    var buttoninnerHtml = this.innerHTML;
    makesound(buttoninnerHtml);
    buttonAnimation(buttoninnerHtml);
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
})


function makesound(key) {
    var tom1 = new Audio("sounds/tom-1.mp3");
    var tom2 = new Audio("sounds/tom-2.mp3");
    var tom3 = new Audio("sounds/tom-3.mp3");
    var tom4 = new Audio("sounds/tom-4.mp3");
    var crash = new Audio("sounds/crash.mp3");
    var kick = new Audio("sounds/kick-bass.mp3");
    var snare = new Audio("sounds/snare.mp3");

    switch (key) {
        case "k":

            crash.play();
            break;
        case "j":

            kick.play();
            break;
        case "l":

            snare.play();
            break;
        case "w":

            tom1.play();
            break;
        case "a":

            tom2.play();
            break;
        case "d":

            tom3.play();
            break;
        case "s":

            tom4.play();
            break;


        default:
            console.log(event.key);
            break;
    }

}
function buttonAnimation(button) {
    var btnclicked = document.querySelector("." + button);
    btnclicked.classList.add("pressed");
    window.setTimeout(function () {
        btnclicked.classList.remove("pressed")
    }, 100);

}

//     audio.play();