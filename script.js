const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector("button");

function createGrid(numSquares) {
    // Reset gridContainer
    gridContainer.innerHTML = "";
    
    for (let i = 0; i < (numSquares * numSquares); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `flex-basis : calc(100% / ${numSquares})`);
        gridContainer.appendChild(square);
    }
}

newGridButton.addEventListener("click", () => {
    let done = false;
    while (!done) {
        let inputInString = prompt("Enter the number of squares desired for each side of the grid (max 100):");
        if (inputInString === "" || inputInString === null) break; // exit the loop doing nothing

        let numSquares = Number(inputInString);

        if (numSquares > 0 && numSquares <= 100) {
            createGrid(numSquares);
            done = true;
        }
        
        else {
            alert("You must enter a number between 1 and 100! Retry");
        }
    }
});

createGrid(16);