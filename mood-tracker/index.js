let historyButton = document.querySelector(".history-button");
let history = document.querySelector(".history");

console.log("history-button :", historyButton);

const fullHistory = () => {
  history.classList.toggle("show");
  console.log(history)
};

historyButton.addEventListener("click", fullHistory);
console.log(historyButton);
