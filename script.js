const container = document.querySelector("#container");
const gridReset = document.querySelector("#reset-grid");
const gridClear = document.querySelector("#grid-clear");
const gridSize = document.querySelector("#grid-size");
// const grid = { row: 16, col: 16 };
let rowsorcols = 16;
// const total = grid.row * grid.col;
const total = rowsorcols * rowsorcols;

function resetGrid() {
     let number = prompt("Please enter a number between 1 and 100: ");
          number = parseInt(number);
          if ( number >= 1 && number <= 100) {
               rowsorcols = number;
               const totals = rowsorcols * rowsorcols;
               createGrid(totals);
          } else {
               alert("Invalid input. Please enter a number between 1 and 100");
          }
}
function createGrid(tot) {
     container.innerHTML = "";
     for (let i = 0; i < tot; i++) {
          const ele = document.createElement("div");
          ele.classList.add("box");
          container.appendChild(ele);
          // ele.textContent= `${i+1}`
     }
     container.style.gridTemplateColumns = `repeat(${rowsorcols}, 1fr)`;
}

function clearGrid() {
     container.innerHTML = "";
   }

gridReset.addEventListener("click", resetGrid);
gridClear.addEventListener("click", clearGrid);
createGrid(total);

