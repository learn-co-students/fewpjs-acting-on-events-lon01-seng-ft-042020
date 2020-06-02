// Your code here
const dodger = document.querySelector('#dodger')

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
    moveDodgerLeft()
    }});

function moveDodgerRight() {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left + 1}px`;
        }

document.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") {
            moveDodgerRight()
            }});