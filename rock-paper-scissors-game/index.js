// store all the usable items in varibale
// make a function jisme ki jis bhi buttonp pe click ho raha hai uski value leke baki ke results get karlo

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const computerRandomGuess = ["rock", "paper", "scissors"];

const result = (e) => {
  computerGusess = Math.floor(Math.random(computerRandomGuess) * 3);
  let computerAnswer = computerRandomGuess[computerGusess];

  console.log("user", e.target.className, "computer", computerAnswer);

  switch (e.target.className) {
    case "rock":
      if (computerAnswer == "rock") {
        console.log("its a tie");
      } else if (computerAnswer == "scissors") {
        console.log("you win rock beats the scissors");
      } else {
        console.log("you loose paper betas the rock");
      }
      break;
    case "paper":
      if (computerAnswer == "rock") {
        console.log("you win paper beats the rock");
      } else if (computerAnswer == "scissors") {
        console.log("you loose scissors beats the paper");
      } else {
        console.log("its a tie");
      }
      break;
    case "scissors":
      if (computerAnswer == "rock") {
        console.log("you loose rock beats the scissors");
      } else if (computerAnswer == "scissors") {
        console.log("its a tie");
      } else {
        console.log("you win scissor beats the paper");
      }
      break;
  }
};

rock.addEventListener("click", result);
paper.addEventListener("click", result);
scissors.addEventListener("click", result);
