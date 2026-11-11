function addSquares(numSquares) {
    // Get container inner width minus padding values
    const gridContainer = document.querySelector(".grid-container");
    let computedStyle = getComputedStyle(gridContainer);
    let containerWidth = gridContainer.clientWidth;
    containerWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    // Set single square width
    let squareWidth = containerWidth / numSquares;

    for (let i = 0; i < (numSquares * numSquares); i++) {
        const square = document.createElement("div");
        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareWidth}px`;
        gridContainer.appendChild(square);
    }
}

addSquares(16);