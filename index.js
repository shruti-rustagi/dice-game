var randomnum1 = Math.random();
randomnum1 = Math.round((randomnum1 * 6 )) + 1 ;
var dicenum = "dice" + randomnum1 + ".png";
var diceimgsrc= "images/" + dicenum;
document.querySelectorAll("img")[0].setAttribute("src" ,diceimgsrc);
var randomnum2 = Math.random();
randomnum2 = Math.round((randomnum2 * 6 )) + 1 ;
var dicenum2 = "dice" + randomnum2 + ".png";
var diceimgsrc2= "images/" + dicenum2;
document.querySelectorAll("img")[1].setAttribute("src" ,diceimgsrc2);
if (randomnum1 > randomnum2)
{
	document.querySelector("h1").innerHTML= "PLAYER 1 WINS";
}
else if (randomnum2 > randomnum1) {
	document.querySelector("h1").innerHTML= "PLAYER 2 WINS";
}
else
{
	document.querySelector("h1").innerHTML= "DRAW";
}