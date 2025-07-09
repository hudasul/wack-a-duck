function init() {
  const gridElem = document.querySelector(".grid")
  const cells = []
  const gridWidth = 10
  const numberOfCells = gridWidth * gridWidth
  let duckPosition = 20

  function addDuck() {
    cells[duckPosition].classList.add("duck")
  }

  function removeDuck() {
    cells[duckPosition].classList.remove("duck")
  }
  function play() {
    setInterval(()=> {
      removeDuck()
      duckPosition= Math.floor(Math.random() * numberOfCells)
      addDuck()
    }, 3000)
  }
  function createGrid() {
    // for every cell, create a div
    // then append the cell to the grid

    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div")
      // cell.classList.add("duck")
      cell.textContent = i
      cells.push(cell)
      gridElem.appendChild(cell)
    }
    console.log(cells)
  }

  createGrid()
  play()

}
document.addEventListener("DOMContentLoaded", init)
