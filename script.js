// Tic-Tac-Toe Game -- JavaScript file //

let game1 = gameBoard('', '', '', '', '', '', '', '', '');
let name1 = document.querySelector('#nameX');
let name2 = document.querySelector('#nameO');
let player1 = playerX('Jared');
let player2 = playerO('Computer');

//Player X starts the game
let turnX = true;
//sets "X" vs "O" values based on whose turn it is
if (turnX = true) {
    marker = 'X';
} else {
    marker = 'O';
}

//Read And number each cell
let cell1 = document.querySelector('#cell1');
let cell2 = document.querySelector('#cell2');
let cell3 = document.querySelector('#cell3');
let cell4 = document.querySelector('#cell4');
let cell5 = document.querySelector('#cell5');
let cell6 = document.querySelector('#cell6');
let cell7 = document.querySelector('#cell7');
let cell8 = document.querySelector('#cell8');
let cell9 = document.querySelector('#cell9');
//Listen for a click in each cell and run the function to place a marker in the array for the specific cell
cell1.addEventListener('click', placeMarker(cell1, marker));
cell2.addEventListener('click', placeMarker(cell2, marker));
cell3.addEventListener('click', placeMarker(cell3, marker));
cell4.addEventListener('click', placeMarker(cell4, marker));
cell5.addEventListener('click', placeMarker(cell5, marker));
cell6.addEventListener('click', placeMarker(cell6, marker));
cell7.addEventListener('click', placeMarker(cell7, marker));
cell8.addEventListener('click', placeMarker(cell8, marker));
cell9.addEventListener('click', placeMarker(cell9, marker));
//display the array in the cell grid whenever one of the cells is clicked
cell1.addEventListener('click', display);
cell2.addEventListener('click', display);
cell3.addEventListener('click', display);
cell4.addEventListener('click', display);
cell5.addEventListener('click', display);
cell6.addEventListener('click', display);
cell7.addEventListener('click', display);
cell8.addEventListener('click', display);
cell9.addEventListener('click', display);

//reset the gameboard array
//const resetButton = document.querySelector('#resetButton');
//resetButton.addEventListener('click', resetArray);

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

//Function to place marker in cell
function placeMarker(cellNumber, marker) {
    if (cellNumber = cell1) {
        game1[0] = marker;
    } else {
        game1[0] = game1[0];
    };
    if (cellNumber = cell2) {
        game1[1] = marker;
    };
    if (cellNumber = cell3) {
        game1[2] = marker;
    };
    if (cellNumber = cell4) {
        game1[3] = marker;
    };
    if (cellNumber = cell5) {
        game1[4] = marker;
    };
    if (cellNumber = cell6) {
        game1[5] = marker;
    };
    if (cellNumber = cell7) {
        game1[6] = marker;
    };
    if (cellNumber = cell8) {
        game1[7] = marker;
    };
    if (cellNumber = cell9) {
        game1[8] = marker;
    };

    if (marker = 'X') {
        turnX = false;
    } else {
        turnX = true;
    };

}

//function resetArray() {
//    for (i=0, i<game1.length, i++) {
//        game1[i] = '';
//    };
//}

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
