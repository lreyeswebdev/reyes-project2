// HTML Elements
const displayContent = document.getElementById("displayContent");
const restartBtn = document.getElementById("restartBtn");
const squares = document.querySelectorAll('.square');

// game variables
let gameIsLive = true;
let xIsNext = true;


// event handlers
const squareClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        xIsNext = !xIsNext;
    } else {
        classList.add('o');
        xIsNext = !xIsNext;
    }
    
}

// event listeners

for (const square of squares) {
    square.addEventListener('click', squareClick)
}