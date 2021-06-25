var randomNumber1=Math.floor((Math.random() * 6) + 1);

if(randomNumber1===1)
{
  // alert("Dice1.png");
  document.querySelector(".img1").src = 'images/dice1.png';
}
else if(randomNumber1===2)
{
  document.querySelector(".img1").src ='images/dice2.png';
}
else if(randomNumber1===3)
{
  document.querySelector(".img1").src ='images/dice3.png';
}
else if(randomNumber1===4)
{
    document.querySelector(".img1").src ='images/dice4.png';
}
else if(randomNumber1===5)
{
  document.querySelector(".img1").src ='images/dice5.png';
}
else if(randomNumber1===6)
{
  // document.querySelector(".img1").src ='images/dice6.png';
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var img2 = document.querySelector(".img2");
var source = "images/dice" + randomNumber2 +".png";
// img2.src = source;
img2.setAttribute("src", source);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player1 Wins";
}

else if (randomNumber2 > randomNumber1)
{
  document.querySelector("h1").textContent="Player2 Wins";
}

else
{
  document.querySelector("h1").textContent="Draw";
}
