var randomnumber1=(Math.random() * 10)+1;

if(randomnumber1>6){
    randomnumber1=Math.floor(randomnumber1-6)+1;
}else{
    randomnumber1=Math.floor(randomnumber1)+1;
}

var randomDiceImage="images/dice"+randomnumber1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage);




var randomnumber2=(Math.random() * 10)+1;

if(randomnumber2>6){
    randomnumber2=Math.floor(randomnumber2-6)+1;
}else{
    randomnumber2=Math.floor(randomnumber2)+1;
}

var randomDiceImage2="images/dice"+randomnumber2+".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);



if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";

}
 else if(randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩 ";

}
 else if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML="It's a Draw! ";
}
