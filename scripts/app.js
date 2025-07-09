function init() {
  const gridElem = document.querySelector(".grid")
  const cells  = []
  const gridWidth = 10
  const numberOfCells = gridWidth * gridWidth

  function createGrid() {
    // for every cell, create a div
    // then append the cell to the grid
    
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement("div")
      cell.classList.add("duck")
      cell.textContent = i
      cells.push(cell)
      gridElem.appendChild(cell)
    }
    console.log(cells)
  }

  createGrid()
}
document.addEventListener("DOMContentLoaded", init)
