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
    const one = squares[0].classList[1];
    const two = squares[1].classList[1];
    const three = squares[2].classList[1];
    const four = squares[3].classList[1];
    const five = squares[4].classList[1];
    const six = squares[5].classList[1];
    const seven = squares[6].classList[1];
    const eight = squares[7].classList[1];
    const nine = squares[8].classList[1];

    // check winner - rows, columns, diagonal
    if (one && one === two && one === three) {        
        winCondition(one);
        squares[0].classList.add('won');
        squares[1].classList.add('won');
        squares[2].classList.add('won');
    } else if (four && four === five && four === six) {
        winCondition(four);
        squares[3].classList.add('won');
        squares[4].classList.add('won');
        squares[5].classList.add('won');
    } else if (seven && seven === eight && seven === nine) {
        winCondition(seven);
        squares[6].classList.add('won');
        squares[7].classList.add('won');
        squares[8].classList.add('won');
    } else if (one && one === four && one === seven) {
        winCondition(one);
        squares[0].classList.add('won');
        squares[3].classList.add('won');
        squares[6].classList.add('won');
    } else if (two && two === five && two === eight) {
        winCondition(two);
        squares[1].classList.add('won');
        squares[4].classList.add('won');
        squares[7].classList.add('won');
    } else if (three && three === six && three === nine) {
        winCondition(three);
        squares[2].classList.add('won');
        squares[5].classList.add('won');
        squares[8].classList.add('won');
    } else if (one && one === five && one === nine) {
        winCondition(one);
        squares[0].classList.add('won');
        squares[4].classList.add('won');
        squares[8].classList.add('won');
    } else if (three && three === five && three === seven) {
        winCondition(three);
        squares[2].classList.add('won');
        squares[4].classList.add('won');
        squares[6].classList.add('won');
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
const restartGame = () => {
    xIsNext = true;
    displayContent.innerHTML = "Player X's turn."
    for (const square of squares) {
        square.classList.remove('x');
        square.classList.remove('o');
        square.classList.remove('won');
    }
}

const squareClick = (e) => {
    const classList = e.target.classList;
    

    if (classList[1] === 'x' || classList[1] === 'o') {
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

restartBtn.addEventListener('click', restartGame)