let player = "X";
let opponent = "O";

let gameStart = false;

let playerCanMark = true;
let opponentCanMark = false;
let isGameOver = false;
let hasPlayerWon = false;
let hasOpponentWon = false;

let emptyCase = 9;

let opponentProfile = document.getElementById("opponent-profile");

let square = document.getElementById("square");

//get the each case in the square
let case1 = document.getElementById("case1");
let case2 = document.getElementById('case2');
let case3 = document.getElementById('case3');

let case4 = document.getElementById('case4');
let case5 = document.getElementById('case5');
let case6 = document.getElementById('case6');

let case7 = document.getElementById('case7');
let case8 = document.getElementById('case8');
let case9 = document.getElementById('case9');

//stocking each row 
let firstRow = [case1, case2, case3];
let secondRow = [case4, case5, case6];
let thirdRow = [case7, case8, case9];

//stocking each column
let firstCol = [case1, case4, case7];
let secondCol = [case2, case5, case8];
let thirdCol = [case3, case6, case9];

//stocking each oblique
let firstObl = [case1, case5, case9];
let secondObl = [case3, case5, case7];

let cases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];


for (i = 0; i < cases.length; i++) {
    if (playerCanMark) {
        cases[i].addEventListener("click", function () {
            placeMark(this);
        })
    }
}

function placeMark(x) {
    if (!isGameOver) //not game over
    {
        moveLeftCheck() //check if there are move left
        //player place his mark
        if (x.innerText == ".") {
            x.innerText = player; // X
            playerCanMark = false;
            opponentCanMark = true;
            playerProfile.style.transform = "scale(1.0)";
            opponentProfile.style.transform = "scale(1.5)";
            emptyCase -= 1;
            setTimeout(() => {
                bestMoveAi();
            }, 2000)
        }//opponent place his mark
    }
    checkPlayerWin();
}

function gameOver() {
    emptyCase = 0;
    isGameOver = true;

    if (hasPlayerWon) {
        // alert("Player One Won");
    } else if (hasOpponentWon) {
        // alert("Player Two Won");
    }
}

function moveLeftCheck() {
    if (emptyCase <= 0) {
        //disable click
        alert("No move left")
    }
}

function checkPlayerWin() {
    //horizontal check
    if (case1.innerText == player && case2.innerText == player && case3.innerText == player) {
        for (i = 0; i < firstRow.length; i++) {
            firstRow[i].style.transition = "0.5s ease";
            firstRow[i].style.color = "white";
            firstRow[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
    if (case4.innerText == player && case5.innerText == player && case6.innerText == player) {
        for (i = 0; i < secondRow.length; i++) {
            secondRow[i].style.transition = "0.5s ease";
            secondRow[i].style.color = "white";
            secondRow[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
    if (case7.innerText == player && case8.innerText == player && case9.innerText == player) {
        for (i = 0; i < thirdRow.length; i++) {
            thirdRow[i].style.transition = "0.5s ease";
            thirdRow[i].style.color = "white";
            thirdRow[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }

    //vertical check
    if (case1.innerText == player && case4.innerText == player && case7.innerText == player) {
        for (i = 0; i < firstCol.length; i++) {
            firstCol[i].style.transition = "0.5s ease";
            firstCol[i].style.color = "white";
            firstCol[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
    if (case2.innerText == player && case5.innerText == player && case8.innerText == player) {
        for (i = 0; i < secondCol.length; i++) {
            secondCol[i].style.transition = "0.5s ease";
            secondCol[i].style.color = "white";
            secondCol[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
    if (case3.innerText == player && case6.innerText == player && case9.innerText == player) {
        for (i = 0; i < thirdCol.length; i++) {
            thirdCol[i].style.transition = "0.5s ease";
            thirdCol[i].style.color = "white";
            thirdCol[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }

    //oblique check
    if (case1.innerText == player && case5.innerText == player && case9.innerText == player) {
        for (i = 0; i < firstObl.length; i++) {
            firstObl[i].style.transition = "0.5s ease";
            firstObl[i].style.color = "white";
            firstObl[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
    if (case3.innerText == player && case5.innerText == player && case7.innerText == player) {
        for (i = 0; i < secondObl.length; i++) {
            secondObl[i].style.transition = "0.5s ease";
            secondObl[i].style.color = "white";
            secondObl[i].style.background = "green";
        }
        hasPlayerWon = true;
        // gameOver();
    }
}

function checkOppenentWin() {
    //horizontal check
    if (case1.innerText == opponent && case2.innerText == opponent && case3.innerText == opponent) {
        for (i = 0; i < firstRow.length; i++) {
            firstRow[i].style.transition = "0.5s ease";
            firstRow[i].style.color = "white";
            firstRow[i].style.background = "red";
        }
        hasOpponentWon = true;
        // gameOver();
    }
    if (case4.innerText == opponent && case5.innerText == opponent && case6.innerText == opponent) {
        for (i = 0; i < secondRow.length; i++) {
            secondRow[i].style.transition = "0.5s ease";
            secondRow[i].style.color = "white";
            secondRow[i].style.background = "red";
        }
        hasOpponentWon = true;
        // gameOver();
    }
    if (case7.innerText == opponent && case8.innerText == opponent && case9.innerText == opponent) {
        for (i = 0; i < thirdRow.length; i++) {
            thirdRow[i].style.transition = "0.5s ease";
            thirdRow[i].style.color = "white";
            thirdRow[i].style.background = "red";
        }
        hasOpponentWon = true;
        // gameOver();
    }

    //vertical check
    if (case1.innerText == opponent && case4.innerText == opponent && case7.innerText == opponent) {
        for (i = 0; i < firstCol.length; i++) {
            firstCol[i].style.transition = "0.5s ease";
            firstCol[i].style.color = "white";
            firstCol[i].style.background = "red";
        }
        hasOpponentWon = true;
        // gameOver();
    }
    if (case2.innerText == opponent && case5.innerText == opponent && case8.innerText == opponent) {
        for (i = 0; i < secondCol.length; i++) {
            secondCol[i].style.transition = "0.5s ease";
            secondCol[i].style.color = "white";
            secondCol[i].style.background = "green";
        }
        hasOpponentWon = true;
        // gameOver();
    }
    if (case3.innerText == opponent && case6.innerText == player && case9.innerText == player) {
        for (i = 0; i < thirdCol.length; i++) {
            thirdCol[i].style.transition = "0.5s ease";
            thirdCol[i].style.color = "white";
            thirdCol[i].style.background = "green";
        }
        hasOpponentWon = true;
        // gameOver();
    }

    //oblique check
    if (case1.innerText == opponent && case5.innerText == opponent && case9.innerText == opponent) {
        for (i = 0; i < firstObl.length; i++) {
            firstObl[i].style.transition = "0.5s ease";
            firstObl[i].style.color = "white";
            firstObl[i].style.background = "green";
        }
        hasOpponentWon = true;
        // gameOver();
    }
    if (case3.innerText == opponent && case5.innerText == opponent && case7.innerText == opponent) {
        for (i = 0; i < secondObl.length; i++) {
            secondObl[i].style.transition = "0.5s ease";
            secondObl[i].style.color = "white";
            secondObl[i].style.background = "green";
        }
        hasOpponentWon = true;
        // gameOver();
    }
}

let scores = {
    'X': 1,
    'O': -1,
    'tie': 0
}

function checkWinner() {
    checkPlayerWin()
    checkOppenentWin()
    if (hasPlayerWon) {
        return 'X';
    } else if (hasOpponentWon) {
        return 'O';
    } else if (!hasPlayerWon && !hasOpponentWon && emptyCase <= 0) {
        return "tie";
    } else {
        return null;
    }
}

function minimax(cases, depth, isMaximizing) {
    let result = checkWinner();
    console.log(result)
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < cases.length; i++) {
            //check if the case is empty
            if (cases[i].innerText == ".") {
                cases[i].innerText = opponent;
                let score = minimax(cases, depth + 1, false);
                cases[i].innerText = ".";
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;

    } else {
        let bestScore = Infinity;
        for (let i = 0; i < cases.length; i++) {
            //check if the case is empty
            if (cases[i].innerText == ".") {
                cases[i].innerText = player;
                let score = minimax(cases, depth + 1, true);
                cases[i].innerText = ".";
                bestScore = Math.min(score, bestScore);
            }
        }

        return bestScore;
    }
}

function bestMoveAi() {
    //AI 's bestMove
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < cases.length; i++) {
        //check if the case is empty
        if (cases[i].innerText == ".") {
            cases[i].innerText = opponent;
            let score = minimax(cases, 0, false);
            console.log(score)
            cases[i].innerText = ".";

            if (score > bestScore) {
                bestScore = score;
                move = i;
                console.log(i)
            }
        }
    }

    cases[move].innerText = opponent;
    playerCanMark = true;
    opponentCanMark = false;
    playerProfile.style.transform = "scale(1.5)";
    opponentProfile.style.transform = "scale(1.0)";
    emptyCase -= 1;
    checkOppenentWin();

}
