const dodger = document.querySelector('#dodger');

dodger.style.backgroundColor = '#FF69B4';

function moveDodgerLeft(){
  let leftNumbers = dodger.style.left;
  let moveLeft = parseInt(leftNumbers);

  if (moveLeft > 0){
    dodger.style.left = `${moveLeft - 2}px`;
  }
}

function moveDodgerRight(){
  let rightNumbers = dodger.style.left;
  let moveRight = parseInt(rightNumbers);

  if (moveRight < 360){
    dodger.style.left = `${moveRight + 2}px`;
  }
}

function moveDodgerUp(){
  let bottomNumbers = dodger.style.bottom;
  let moveUp = parseInt(bottomNumbers);

  if (moveUp < 380){
    dodger.style.bottom = `${moveUp + 2}px`;
  }
}
function moveDodgerDown(){
  let bottomNumbers = dodger.style.bottom;
  let moveDown = parseInt(bottomNumbers);

  if (moveDown > 0){
    dodger.style.bottom = `${moveDown - 2}px`;
  }
}

document.addEventListener("keydown", function(e) {
  console.log(e.key)
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight"){
    moveDodgerRight();
  }
  else if (e.key === "ArrowUp"){
    moveDodgerUp();
  }
  else if (e.key === "ArrowDown"){
    moveDodgerDown();
  }
});
