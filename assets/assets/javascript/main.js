var wordPool = ["desires", "choices", "cool", "bootcamp"];

var wCount = 0;
var lCount = 0;
var lives = 6;
var letters = [];
var curWord = "";
var blankSpots = [];
var guess = [];






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
var gameWord = wordPool[Math.floor(Math.random() * wordPool.length)];
console.log(letterCount(gameWord));




// document.getElementById("demo").innerHTML = text;
// document.getElementById("hiddenWord").innerHTML = text;
