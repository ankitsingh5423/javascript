// store all the items in variable
//  button pe click hone per random value aani chahiye 0-6 ke bich mai
// jo bhi value aaye vo niche print honi chahiye

const dice = document.getElementById("dice");
const diceBtn = document.getElementById("btn");
const diceFaces = ["&#9857", "&#9858", "&#9859", "&#9860", "&#9861", "&#9861"];
const resultFace = document.querySelector(".roll-dice");
const resultText = document.querySelector(".roll-text");
const resultConatiner = document.querySelector(".resultConatiner");

let counter = 1;
const rollDice = () => {
  dice.classList.remove("rolling");
  void dice.offsetWidth;
  dice.classList.add("rolling");

  let randomFaces = Math.floor(Math.random() * 6);
  dice.innerHTML = diceFaces[randomFaces];
  const test = document.createElement("div");
  let updateCounter = counter++;
  test.classList.add("roll-container");
  test.innerHTML = `<span class="roll-text">Roll${updateCounter}:</span><span class="roll-dice">${diceFaces[randomFaces]}</span>`;

  resultConatiner.appendChild(test);
};

diceBtn.addEventListener("click", rollDice);
