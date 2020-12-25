rdmNum1 = Math.floor(Math.random() * 6 + 1);
document.getElementById("1").setAttribute("src", "images/dice" + rdmNum1 + ".png");

rdmNum2 = Math.floor(Math.random() * 6 + 1);
document.getElementById("2").setAttribute("src", "images/dice" + rdmNum2 + ".png");



function diceGame() {
    if (rdmNum1 > rdmNum2) {
        return document.querySelector("h1").innerHTML = "🏆 Player 1 Win!";
    } else if (rdmNum1 < rdmNum2) {
        return document.querySelector("h1").innerHTML = "Player 2 Win! 🏆";
    } else {
        return document.querySelector("h1").innerHTML = "Draw ❌";
    }
}

diceGame()