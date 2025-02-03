let player = "X";
let opponent = "O";

let playerCanMark = true;
let opponentCanMark = false;
let isGameOver = false;
let hasPlayerWon = false;
let hasOpponentWon = false;

let emptyCase = 9;

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

let cases = [case1, case2, case3, case4, case5, case6, case7, case8, case9];

for(i=0; i<cases.length; i++)
{
    cases[i].addEventListener("click", function(){
        placeMark(this);
    })
}

function placeMark(x)
{
    checkPlayerWin();
    checkOppenentWin();
    if(!isGameOver) //not game over
    {
        moveLeftCheck() //check if there are move left
        //player place his mark
        if(x.innerText == "." && playerCanMark)
        {
            x.innerText = player; // X
            playerCanMark = false;
            opponentCanMark = true;
            emptyCase -= 1;
        }//opponent place his mark
        else if(x.innerText == "." && opponentCanMark)
        {
            x.innerText = opponent; // O
            playerCanMark = true;
            opponentCanMark = false;
            emptyCase -= 1;
        }
    }
}

function gameOver()
{
    emptyCase = 0;
    isGameOver = true;
}

function moveLeftCheck()
{
    if(emptyCase <= 0)
    {
        //disable click
        alert("No move left")
    }
}

function checkPlayerWin()
{
    //horizontal check
    if(case1.innerText == player && case2.innerText == player && case3.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
    if(case4.innerText == player && case5.innerText == player && case6.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
    if(case7.innerText == player && case8.innerText == player && case9.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }

    //vertical check
    if(case1.innerText == player && case4.innerText == player && case7.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
    if(case2.innerText == player && case5.innerText == player && case8.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
    if(case3.innerText == player && case6.innerText == player && case9.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }

    //oblique check
    if(case1.innerText == player && case5.innerText == player && case9.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
    if(case3.innerText == player && case5.innerText == player && case7.innerText == player)
    {
        hasPlayerWon = true;
        gameOver();
    }
}

function checkOppenentWin()
{
    //horizontal check
    if(case1.innerText == opponent && case2.innerText == opponent && case3.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
    if(case4.innerText == opponent && case5.innerText == opponent && case6.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
    if(case7.innerText == opponent && case8.innerText == opponent && case9.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }

    //vertical check
    if(case1.innerText == opponent && case4.innerText == opponent && case7.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
    if(case2.innerText == opponent && case5.innerText == opponent && case8.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
    if(case3.innerText == opponent && case6.innerText == player && case9.innerText == player)
    {
        hasOpponentWon = true;
        gameOver();
    }

    //oblique check
    if(case1.innerText == opponent && case5.innerText == opponent && case9.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
    if(case3.innerText == opponent && case5.innerText == opponent && case7.innerText == opponent)
    {
        hasOpponentWon = true;
        gameOver();
    }
}

