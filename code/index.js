//Selecting HTML DOM Elements
const rulesTopClose = document.querySelector("#rulesTopClose");
const rules = document.querySelector("#rules");
const rulesBtn = document.querySelector("#rulesBtn");
const body = document.querySelector("body");
const playArea = document.querySelector("#playArea");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");
const resultMessageBox = document.querySelector("#resultMessageBox");
const resultMessage = document.querySelector("#resultMessage");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const userChoiceOut = document.querySelector("#userChoiceOut");
const userChoiceIn = document.querySelector("#userChoiceIn");
const userImage = document.querySelector("#userImage");
const robotChoiceOut = document.querySelector("#robotChoiceOut");
const robotChoiceIn = document.querySelector("#robotChoiceIn");
const robotImage = document.querySelector("#robotImage");
const playAgainBtn = document.querySelector("#playAgain");
const pointsValue = document.querySelector("#pointsValue");

choices.forEach(choice => {
    choice.addEventListener("click", stepTwo)
})

playArea.classList.remove("hidden");  
playArea.classList.add("flex");  

result.classList.remove("flex");
result.classList.add("hidden")

rulesTopClose.addEventListener("click", closeRules);
rulesBtn.addEventListener("click", openRules);
playAgainBtn.addEventListener("click", playAgain)

function closeRules(){
    rules.classList.remove("flex");
    rules.classList.add("hidden");
}

function openRules(){
    rules.classList.remove("hidden");
    rules.classList.add("flex");
}

function stepTwo(e){
    let userSelection;
    if(e.srcElement.localName == "img"){
        userSelection = e.path[2];
    }
    if(e.srcElement.localName == "div"){
        userSelection = e.path[0];
    }
    playArea.classList.remove("flex");
    playArea.classList.add("hidden");

    result.classList.remove("hidden");
    result.classList.add("flex");

    resultMessageBox.classList.remove("flex");
    resultMessageBox.classList.add("hidden");

    console.log(userSelection.id);
    if(userSelection.id == "rock"){
        userChoiceOut.classList.add("bg-rose-500")
        userChoiceOut.classList.remove("bg-yellow-500")
        userChoiceOut.classList.remove("bg-blue-500")
        userImage.src = "./rock-paper-scissors-master/images/icon-rock.svg"
    }else if(userSelection.id == "paper"){
        userChoiceOut.classList.add("bg-blue-500")
        userChoiceOut.classList.remove("bg-yellow-500")
        userChoiceOut.classList.remove("bg-rose-500")
        userImage.src = "./rock-paper-scissors-master/images/icon-paper.svg"
    }else{
        userChoiceOut.classList.add("bg-yellow-500")
        userChoiceOut.classList.remove("bg-rose-500")
        userChoiceOut.classList.remove("bg-blue-500")
        userImage.src = "./rock-paper-scissors-master/images/icon-scissors.svg"
    }

    let robotSelection;

    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber == 0){
        robotSelection = rock;
        robotChoiceOut.classList.remove("bg-yellow-500")
        robotChoiceOut.classList.remove("bg-blue-500")
        robotChoiceOut.classList.add("bg-rose-500")
        robotImage.src = "./rock-paper-scissors-master/images/icon-rock.svg"
    }
    else if(randomNumber == 1){
        robotSelection = scissors;
        robotChoiceOut.classList.add("bg-yellow-500")
        robotChoiceOut.classList.remove("bg-rose-500")
        robotChoiceOut.classList.remove("bg-blue-500")
        robotImage.src = "./rock-paper-scissors-master/images/icon-scissors.svg"
    }
    else{
        robotSelection = paper;
        robotChoiceOut.classList.add("bg-blue-500")
        robotChoiceOut.classList.remove("bg-yellow-500")
        robotChoiceOut.classList.remove("bg-rose-500")
        robotImage.src = "./rock-paper-scissors-master/images/icon-paper.svg"
    }

    const whoWon = winnerChecker(userSelection, robotSelection);
    resultMessageBox.classList.add("flex");
    resultMessageBox.classList.remove("hidden");
    resultMessage.innerHTML = whoWon;
}

function winnerChecker(userSelection, robotSelection){
    let user = userSelection.id;
    let robot = robotSelection.id;

    if(user == "rock"){
        if(robot == "paper"){
            pointsValue.innerHTML = Number(pointsValue.innerHTML) - 1;
            return "YOU LOST";
        }
        else if(robot == "rock"){
            return "TIE";
        }
        else{
            pointsValue.innerHTML = Number(pointsValue.innerHTML) + 1;
            return "YOU WON";
        }
    }
    else if(user == "paper"){
        if(robot == "paper"){
            return "TIE";
        }
        else if(robot == "rock"){
            pointsValue.innerHTML = Number(pointsValue.innerHTML) + 1;
            return "YOU WON";
        }
        else{
            pointsValue.innerHTML = Number(pointsValue.innerHTML) - 1;
            return "YOU LOST";
        }
    }
    else{
        if(robot == "paper"){
            pointsValue.innerHTML = Number(pointsValue.innerHTML) + 1;
            return "YOU WON";
        }
        else if(robot == "rock"){
            pointsValue.innerHTML = Number(pointsValue.innerHTML) - 1;
            return "YOU LOST";
        }
        else{
            return "TIE";
        }
    }
}

function playAgain(){
    playArea.classList.remove("hidden");
    playArea.classList.add("flex");

    result.classList.remove("flex");
    result.classList.add("hidden");
}