// HTML Elements
const displayContent = document.getElementById("displayContent");
const restartBtn = document.getElementById("restartBtn");
const squares = document.querySelectorAll('.square');

// game variables
let gameIsLive = true;
let xIsNext = true;
let winner = null;

// functions

const winCondition = (letter) => {
    gameIsLive = false;
    winner = letter;
    displayContent.innerHTML = `${winner} has won! 🏆`;
};

const checkGameStatus = () => {
    const one = squares[0].classList[2];
    const two = squares[1].classList[2];
    const three = squares[2].classList[2];
    const four = squares[3].classList[2];
    const five = squares[4].classList[2];
    const six = squares[5].classList[2];
    const seven = squares[6].classList[2];
    const eight = squares[7].classList[2];
    const nine = squares[8].classList[2];

    // check winner - rows, columns, diagonal
    if (one && one === two && one === three) {        
        winCondition(one);
    } else if (four && four === five && four === six) {
        winCondition(four);
    } else if (seven && seven === eight && seven === nine) {
        winCondition(seven);
    } else if (one && one === four && one === seven) {
        winCondition(one);
    } else if (two && two === five && two === eight) {
        winCondition(two);
    } else if (three && three === six && three === nine) {
        winCondition(three);
    } else if (one && one === five && one === nine) {
        winCondition(one);
    } else if (three && three === five && three === seven) {
        winCondition(three);
    } else if (one && two && three && four && five && six && seven && eight && nine) {
        gameIsLive = false;
        displayContent.innerHTML = "It's a tie! 😆";
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            displayContent.innerHTML = "Player X's turn."
        } else {
            displayContent.innerHTML = "Player O's turn."
        }
    }
}

// event handlers
const squareClick = (e) => {
    const classList = e.target.classList;
    const location = classList[1];

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();        
                
    } else {
        classList.add('o');
        checkGameStatus();                
        
    }
    
}

// event listeners

for (const square of squares) {
    square.addEventListener('click', squareClick)
}