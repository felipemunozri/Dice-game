// Generación de números aleatorios

var randomNumber1 = (Math.floor(Math.random()*6))+1;

var randomNumber2 = (Math.floor(Math.random()*6))+1;

// Query para cambiar imagenes según números aleatorios

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Query para cambiar h1 segun ganador, acorde a cual número aleatorio es mayor, o si son iguales, empate

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";  
}else{
  if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
  }else{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
  }
}




