let historyButton = document.querySelector(".history-button");
let history = document.querySelector(".history");
let currentEmoji = document.querySelector(".currentEmoji");
let smile = document.querySelector(".smile");
let sad = document.querySelector(".sad");
let laugh = document.querySelector(".laugh");
let smart = document.querySelector(".smart");
let happySad = document.querySelector(".happySad");

const fullHistory = () => {
  history.classList.toggle("show");
  console.log(history);
  let oldHistory = JSON.parse(localStorage.getItem("moods")) || [];
  history.innerHTML = oldHistory
    .map((e) => {
      return `<span>${e}</span>`;
    })
    .join("");
};

let currentFace = JSON.parse(localStorage.getItem("moods"));

console.log(currentFace);
currentEmoji.innerHTML =
  currentFace == null || "" ? "" : currentFace[currentFace.length - 1];

const updateMood = (e) => {
  let arr = JSON.parse(localStorage.getItem("moods")) || [];
  let selectedEmoji = e.target.innerText;
  currentEmoji.innerText = selectedEmoji;
  let currentEmojiValue = currentEmoji.innerText;

  arr.push(currentEmojiValue);
  localStorage.setItem("moods", JSON.stringify(arr));
  console.log("arr:history", arr);

  history.innerHTML = arr
    .map((e) => {
      return `<span>${e}</span>`;
    })
    .join("");
};
// let moodsArray = []

historyButton.addEventListener("click", fullHistory);
smile.addEventListener("click", updateMood);
sad.addEventListener("click", updateMood);
smart.addEventListener("click", updateMood);
laugh.addEventListener("click", updateMood);
happySad.addEventListener("click", updateMood);
