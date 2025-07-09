function init() {
  function createGrid() {
    // for every cell, create a div
    // then append the cell to the grid
    const gridElem = document.querySelector(".grid")
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement("div")
      cell.textContent = i
      gridElem.appendChild(cell)
    }
  }

  createGrid()
}
document.addEventListener("DOMContentLoaded", init)
