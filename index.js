// In order to make the button click known to us 
// we would use a function called event listener
// First of all we would select the button and then 
// we will use the add event listener function
// which has two types, 1-> the type means
// We want to listen to click or error or anything else
// 2-> We want to specify a function which will be called
// When the button is clicked.

/*
document.querySelector("button").addEventListener("click",handle_click);
*/

// Don't use the parenthesis in function here if you don't want to call
// function automatically.
// We can even paste the whole function in place of function call and 
// removing it's name.



// In selector if we choose .something then it means we have chosen class

var number_of_drum_buttons = document.querySelectorAll(".drum").length;


for(var i = 0; i < number_of_drum_buttons; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handle_click);
}


function handle_click()
{
    // alert("Got fucked😨!");
    var buttonInnerHTML = this.innerHTML;
    make_sound(buttonInnerHTML);
}

// In order to detect the key press we can use the 
// keydown function.

// If we want to see which key is pressed we need to use 
// the key keyword.

// detecting keyboard press
document.addEventListener("keydown", function(event){

    make_sound(event.key);

});



// now i can easily add sound to clicks.
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();


// This function will take input as parameter and do the specified 
// operation or we can say, it will play the required sound.
function make_sound(input)
{
    switch (input) 
    {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
    
}