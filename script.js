// Tic-Tac-Toe Game -- JavaScript file //

let game1 = gameBoard('X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X');
let name1 = document.querySelector('#nameX');
let name2 = document.querySelector('#nameO');
let player1 = playerX('Jared');
let player2 = playerO('Computer');

let cell1 = document.querySelector('#cell1');
let cell2 = document.querySelector('#cell2');
let cell3 = document.querySelector('#cell3');
let cell4 = document.querySelector('#cell4');
let cell5 = document.querySelector('#cell5');
let cell6 = document.querySelector('#cell6');
let cell7 = document.querySelector('#cell7');
let cell8 = document.querySelector('#cell8');
let cell9 = document.querySelector('#cell9');

display();

//Gameboard object
function gameBoard(cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9) {
    let game = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9]
    return game; 
};


//Player objects
function playerX(nameX) {
    nameX: nameX
    return nameX;
}

function playerO(nameO) {
    nameO: nameO
    return nameO;
}

//Display the game board
function display() {
    let card1 = document.createElement('p');
    card1.innerHTML = game1[0];
    let card2 = document.createElement('p');
    card2.innerHTML = game1[1];
    let card3 = document.createElement('p');
    card3.innerHTML = game1[2];
    let card4 = document.createElement('p');
    card4.innerHTML = game1[3];
    let card5 = document.createElement('p');
    card5.innerHTML = game1[4];
    let card6 = document.createElement('p');
    card6.innerHTML = game1[5];
    let card7 = document.createElement('p');
    card7.innerHTML = game1[6];
    let card8 = document.createElement('p');
    card8.innerHTML = game1[7];
    let card9 = document.createElement('p');
    card9.innerHTML = game1[8];

    cell1.appendChild(card1);
    cell2.appendChild(card2);
    cell3.appendChild(card3);
    cell4.appendChild(card4);
    cell5.appendChild(card5);
    cell6.appendChild(card6);
    cell7.appendChild(card7);
    cell8.appendChild(card8);
    cell9.appendChild(card9);
}
