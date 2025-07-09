function init() {
  const gridElem = document.querySelector(".grid");
  const scoreELem = document.querySelector("#score-display");
  const quackELem = document.querySelector("#quack");
  const cells = [];
  const gridWidth = 10;
  const numberOfCells = gridWidth * gridWidth;

  let duckPosition = 20;
  let score = 0;
  let totalDucks = 0;

  function addDuck() {
    cells[duckPosition].classList.add("duck");
    totalDucks++;
  }

  function removeDuck() {
    cells[duckPosition].classList.remove("duck");
  }

  function endGame(){
    alert("Game over, your score = " + score)
    score = 0
    scoreELem.textContent = "Your score is 0"
    totalDucks = 0
   
  }

  function placeRandomDuck(){
     removeDuck();
     duckPosition = Math.floor(Math.random() * numberOfCells);
     addDuck();
  }

  function play() {
    setInterval(() => {
      if (totalDucks < 10) {
        placeRandomDuck()
      }else{
        endGame()
      }
    }, 3000);
  }

  function handleClick(event) {
    // score += 10
    if (event.target.classList.contains("duck")) {
      quackELem.pause();
      quackELem.currentTime = 0;
      score += 10;
      scoreELem.textContent = `Your score is ${score}`;
      quackELem.play();
      placeRandomDuck()
    }
  }
  function createGrid() {
    // for every cell, create a div
    // then append the cell to the grid

    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div");
      // cell.classList.add("duck")
      cell.textContent = i;
      cell.addEventListener("click", handleClick);
      cells.push(cell);
      gridElem.appendChild(cell);
    }
    console.log(cells);
  }

  createGrid();
  play();
}
document.addEventListener("DOMContentLoaded", init);
