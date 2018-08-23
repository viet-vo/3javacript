var wordPool = ["radioshack", "blockbuster", "toysrus", "trilogy"];
var wCount = 0;
var lCount = 0;
var lives = 6;
var curWord = "";
var blankSpots = [];
var guess = [];
var userGuess = [];
var arrLetters =  [];





//chooses random word from wordPool
var gameWord = wordPool[Math.floor(Math.random() * wordPool.length)];
//determines how long a string is
function letterCount(str) {
    var letters = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var splitString = alphabet.split("");
    for (var i = 0; i < str.length; i++) {
        if (splitString.indexOf(str[i]) > -1) {
            letters = letters + 1;
        }
    }
    return letters;
}

var arrLetters = gameWord.split("");
//for the word seleceted from the wordPool creates underscores in relation to the length
for (var i = 0; i < gameWord.length; i++) {
    blankSpots[i] = "_";
}

function checkLetters(letter) {
    letterInWord = false;
    for (var i = 0; i<blankSpots; i++) {
        if(gameWord[i] == letter) {
            letterInWord = true;
            alert("letter found");
        }
    }
}

document.getElementById("hiddenWord").innerHTML = blankSpots.join(" ");
// document.getElementById("").innerHTML = wCount;
// document.getElementById("").innerHTML = lCount;


document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    
checkLetters();
// test
console.log(letterCount(gameWord));
console.log(gameWord);
console.log(blankSpots.join(" "));
console.log(letterGuessed);
console.log(arrLetters);
}

