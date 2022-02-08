


//for dice1

var randomRoll1 = Math.floor(Math.random()*6)+1;  //generating between (1-6)

var randomDiceImage1 = "dice" + randomRoll1 + ".png"; //selecting specific image according to randomRoll

var randomImageSource1 = "images/" + randomDiceImage1; // dynamic img src 

document.querySelectorAll("img")[0].setAttribute("src" , randomImageSource1); //for the 1st img variation






//for dice2   

var randomRoll2 = Math.floor(Math.random()*6) + 1 ;

var randomDiceImage2 = "dice" + randomRoll2 + ".png" ;

var randomImageSource2 = "images/" + randomDiceImage2 ;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);




if (randomRoll1 > randomRoll2)
{
    document.querySelector("h1").innerHTML= ("Player 1 wins");
}
else if (randomRoll1 < randomRoll2)
{
    document.querySelector("h1").innerHTML= ("Player 2 wins");
}

else
{
    document.querySelector("h1").innerHTML = ("Draw!");
}