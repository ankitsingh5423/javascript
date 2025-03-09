// store all the items in variable
//  button pe click hone per random value aani chahiye 0-6 ke bich mai
// jo bhi value aaye vo niche print honi chahiye

const dice = document.getElementById("dice");
const diceBtn = document.getElementById("btn");
let diceFaces = ["&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

diceFaces[2];

console.log(diceFaces);

const rollDice = () => {
  dice.classList.remove("rolling");
  void dice.offsetWidth;
  dice.classList.add("rolling");
  console.log(dice);
};

const diceFace = () => {
  return Math.floor(Math.random() * 5);
};

diceBtn.addEventListener("click", rollDice);
