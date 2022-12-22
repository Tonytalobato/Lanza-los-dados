function randomDice() {

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;
  
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.getElementById("dados").innerHTML = "El jugador 1 gana🚩";
  }
  if(randomNumber1 < randomNumber2) {
    document.getElementById("dados").innerHTML = "El jugador 2 gana🚩";
  }
  if(randomNumber1 === randomNumber2) {
    document.getElementById("dados").innerHTML = "Empate";
  }
}

function randomDice() {

  var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
  var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
  //console.log(randomNumber1);
  //console.log(randomNumber2);


  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
      document.querySelector(".resultado").innerHTML = "Player 1 wins🏁"
  } else {
      if (randomNumber1 < randomNumber2) {
          document.querySelector(".resultado").innerHTML = "Player 2 wins🏁"
      }
      else {
          document.querySelector(".resultado").innerHTML = "Ups...🏳️"
      }
  }
}
  


