//Find the div with id #dodger
let dodger = document.getElementById("dodger");

// //Change its color to black via its style property
// dodger.style.backgroundColor = "#000000";

// //Change its color to pink via its style property
// dodger.style.backgroundColor = "#FF69B4";

// //log the distance between the leftmost edge of the dodger & black-box
// // console.log(dodger.style.left); // "180px"

// //log the distance between the bottom-most edge of the dodger & black-box
// // console.log(dodger.style.bottom); // "0px"

// //Initially the dodger's bottom left edge is currently at (180, 0)
// //Relative to the black box

// //Move the dodger up 
// dodger.style.bottom = "100px";


//Move the dodger to the left if the left button is pressed
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    //Prevent the dodger from moving past the edge
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
});

//Move the dodger to the Right if the left button is pressed

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    //Prevent the dodger from moving past the rightmost edge
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight()
    }
})