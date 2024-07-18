// let randomNumber = parseInt(Math.random() * 100 + 1)

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessedValues = document.querySelector('.guesses');
// const remaningGuess = document.querySelector('.lastResult');
// const message = document.querySelector('.msg');
// const restartGame = document.querySelector('.resultParas');


// const p = document.createElement('p');


// let previousGuess = [];
// let guessNum = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click' , function(e){
//         e.preventDefault();
//         const guess = parseInt(userInput.value);
//         validateGuess(guess) ;
//     })
// }





// function validateGuess(guess) {
//     if(isNaN(guess)){
//         alert("Please enter the valid number...");
//     }else if(guess < 1 && guess > 100){
//         alert("Please enter the number between 1 to 100...");
//     }else{
//             previousGuess.push(guess);
//             if (guessNum === 11) {
//                 displayGuess(guess);
//                 displayMessage(`Game Over...The Random Number was ${randomNumber}`);
//                 endGame();
//             }else{
//                 displayGuess(guess);
//                 checkGuess(guess);
//             }
//     }
// }


// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMessage(`you guessed it right`);
//         endGame();
//     } else if(guess < randomNumber){
//         displayMessage(`your guessed number is toooo low `);
//     } else if(guess > randomNumber){
//         displayMessage(`your guessed number is toooo High `);
//     }
// }


// function displayGuess(guess) {
//     userInput.value = "";
//     guessedValues.innerHTML += `${guess},`;
//     guessNum++;
//     remaningGuess.innerHTML = `${11 - guessNum}`;
// }

// function displayMessage(msg){
//     message.innerHTML = `<h2>${message}</h2>`;
// }


// function endGame() {
//     userInput.innerHTML = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id=newGame>Start New Game</h2>`;
//     restartGame.appendChild(p);
//     playGame = false;
//     startNewGame();
// }

// function startNewGame() {
    
//     const newGameButton = document.getElementById('newGame');
//     newGameButton.addEventListener('click',function(e){
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         previousGuess= [];
//         guessNum = 1;
//         guessedValues.innerHTML = "";
//         remaningGuess.innerHTML = `${11 - guessNum}`;
//         userInput.removeAttribute('disabled');
//         restartGame.removeChild(p);

//         playGame = true;
//     })
// }





let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessedValues = document.querySelector('.guesses');
const remaningGuess = document.querySelector('.lastResult');
const message = document.querySelector('.msg');
const restartGame = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessNum = [];
let remaningNum = 1;

let playGame = true;


if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}


function validateGuess(guess) {
    if(isNaN(guess)) {
        alert(`Please Enter the Valid Number`);
    } else if(guess < 1 && guess > 100) {
        alert(`Please Enter the Number between 1 to 100`)
    }else {
        guessNum.push(guess);
        if(remaningNum === 11) {
            displayGuess(guess);
            displayMessage(`Game Over....The Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
           
        }
    }

}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right....`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage(`you guessed number is Tooo low`)
    } else if( guess > randomNumber) {
        displayMessage(`you guessed number is Tooo High`)
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessedValues.innerHTML += `${guess},`;
    remaningNum++;
    remaningGuess.innerHTML = `${11 - remaningNum}`
}

function displayMessage(msg) {
    message.innerHTML = `<h3>${msg}</h3>`
}

function endGame() {
    userInput.innerHTML = "";
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
    restartGame.appendChild(p);
    playGame = false;
    startNewGame();
}

function startNewGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', function(e) {
    randomNumber = parseInt(Math.random()*100+1);
    guessNum = [];
    remaningNum = 1;
    guessedValues.innerHTML = "";
    remaningGuess.innerHTML = `${11 - remaningNum}`;
    userInput.removeAttribute('disabled');
    restartGame.removeChild(p);
    playGame = true;

    })
}