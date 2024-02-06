
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //generating random options
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = (userChoice) => {
    msg.innerText = `Draw! Both you and comp chose ${userChoice}`;
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You WIN! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Sorry, Computer Wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    } 
}


const playGame = (userChoice) => {
    //Generating computer's choice   
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp choices left are paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //comp choices  left are scissors or rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            // comp choices left are rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});