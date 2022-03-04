// Tic-Tac-Toe Game -- JavaScript file //

//Player Object
const player = (name, marker) => {
    return {name, marker};
}

//GameBoard Object
const gameBoard = (() => {
    let gameboard = [];
    for (i = 0; i < 9; i++) {
        gameboard.push('');
    }

    //pull cell data
    let cells = document.querySelector('.gameGrid');
    gameboard.forEach((item, index) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cells.appendChild(cell);
    })

    //eventlistener for click on each cell
    Array.from(cells.children).forEach((cell, index) => {
        cell.addEventListener('click', () => {
            cell.classList.add(game.activePlayer.marker);
            cell.setAttribute('data', game.activePlayer.marker);
            gameboard[index] = game.activePlayer.marker;
            cell.style.pointerEvents = "none";
            if (game.activePlayer.marker === 'X') {
                cell.innerHTML = `X`;
            } else {
                cell.innerHTML = `O`;
            };
            game.remainingSpots -= 1;
            game.results();
            //turns
            if (game.winnerDeclared == false) {
                if (game.remainingSpots > 0) {
                    game.alertNextPlayer();
                    game.nextPlayer();
                } else if (game.remainingSpots == 0) {
                    game.declareTie();
                }
            }
        })
    });

    return {gameboard};
})();

//Game execution Object
const game = (() => {
    //creates players based on entered Names
    const playerX = player('Player X', 'X');
    const playerO = player('Player O', 'O');
    //initialize game
    let activePlayer = playerX;
    let winnerDeclared = false;
    let remainingSpots = 9;
    let message = document.querySelector('.winnerMessage');
    let playerName = document.querySelector('.name');

    //winning conditions
    const winningAxes = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    //function to check the winner
    function results() {
        winningAxes.forEach((item, index) => {
            if (gameBoard.gameboard[item[0]] === this.activePlayer.marker && gameBoard.gameboard[item[1]] === this.activePlayer.marker
                && gameBoard.gameboard[item[2]] === this.activePlayer.marker) {
                    message.innerHTML = `<b>${this.activePlayer.name} wins!</b>`;
                    this.winnerDeclared = true;
                }
        })
    }

    //function to display players turn
    function alertNextPlayer() {
        this.activePlayer === playerX ? playerName.textContent = 'Player O' : playerName.textContent = 'Player X';
    }

    //function to change turns
    function nextPlayer() {
        this.activePlayer === playerX ? this.activePlayer = playerO : this.activePlayer = playerX;
    }

    //function to declare a tie
    function declareTie() {
        message.innerHTML = "<b>Tie game!</b>";
    }

    return {activePlayer, remainingSpots, results, alertNextPlayer, nextPlayer, declareTie, winnerDeclared};

})();