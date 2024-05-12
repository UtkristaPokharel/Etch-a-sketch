const container = document.querySelector("#container");
const gridReset=document.querySelector("#reset-grid");
const gridClear=document.querySelector("#grid-clear");
const gridSize = document.querySelector("#grid-size");
// const grid = { row: 16, col: 16 };
let rowsorcols=16;
// const total = grid.row * grid.col;
const total = rowsorcols * rowsorcols;


function createGrid(tot) {
	for (let i = 0; i < tot; i++) {
          const ele = document.createElement("div");
          ele.classList.add("box");
          container.appendChild(ele);
          // ele.textContent= `${i+1}`
     }
	container.style.gridTemplateColumns = `repeat(${rowsorcols}, 1fr)`;
}

createGrid(total);

