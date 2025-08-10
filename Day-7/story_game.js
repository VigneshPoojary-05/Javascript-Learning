let playAgain = 'Yes'

while(playAgain){

    alert("You wake up in dark forest");
    
    let userChoice = prompt("Do yo want to go left or rright?")
    if(userChoice==='left'){
        alert("You see something shiny in the mud!")
        userChoice= prompt("Do you pick it up? (Yes or NO)")
        if(userChoice='yes'){
            alert("It is a magical stone you are teleported to safty, you win!")
        }else{
            alert("You are died")
        }
    } else {
        alert("You find a cave!")
        userChoice=prompt("Do you enter a cave?(Yes or No)")
        if(userChoice==='yes'){
            alert("You barely scape!")
        } else{
            alert("Good night")
        }
    }
    userChoice=prompt("Do you want to play again? (Yes or No)")
    if(userChoice==='No'){
        playAgain="No";
        alert("Thankes for playing")
    }
}