const container = document.querySelector("#container");
const gridReset = document.querySelector("#reset-grid");
const gridClear = document.querySelector("#grid-clear");
const gridSize = document.querySelector("#grid-size");

let rowsorcols = 16;
const total = rowsorcols * rowsorcols;

container.style.width = container.style.height = "500px"; //gives width and height to the container

// This function helps with reseting the grid according to user's choice
function resetGrid() {
     let number = prompt("Please enter a number between 1 and 100: ");
     number = parseInt(number);
     if (number >= 1 && number <= 100) {
          rowsorcols = number;
          const totals = rowsorcols * rowsorcols;
          createGrid(totals);
     } else {
          alert("Invalid input. Please enter a number between 1 and 100");
     }
}

// This function creates the grid according to the predicted values
function createGrid(tot) {
     container.innerHTML = "";
     for (let i = 0; i < tot; i++) {
          const ele = document.createElement("div"); //creating the div element for each grid
          ele.classList.add("box");          //giving class box for created grid
          container.appendChild(ele);
          // ele.textContent = `${i + 1}`  // for giving numbers to the grid
          ele.addEventListener("mouseover", setBackgroundColor);      //event listener for setting background color when mouse is hovering over grid
     }
     container.style.gridTemplateColumns = `repeat(${rowsorcols}, 1fr)`; //sets after how many grids, it repeats again on another block
     gridSize.textContent = `Grid Size: ${rowsorcols} x ${rowsorcols} (Resolution)`;
}

// Function for getting random colors
function getRandomColors() {
     const red = Math.floor(Math.random() * 256);
     const green = Math.floor(Math.random() * 256);
     const blue = Math.floor(Math.random() * 256);

     return `rgb(${red}, ${green}, ${blue})`;
}

// Setting the generated random colors on grid
function setBackgroundColor() {
     const randomColor = getRandomColors();
     this.style.backgroundColor = randomColor;
}

// Clears the grid 
function clearGrid() {
     container.innerHTML = "";
}

gridReset.addEventListener("click", resetGrid);// Button when clicked resets the grid
gridClear.addEventListener("click", clearGrid);// Button when clicked clears the grid
createGrid(total);

