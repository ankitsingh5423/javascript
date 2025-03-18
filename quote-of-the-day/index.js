const quote = document.querySelector(".quote");
const newQuoteBtn = document.querySelector(".newQuoteBtn");
const copyBtn = document.querySelector(".copyBtn");
const saveBtn = document.querySelector(".saveBtn");
const twitterBtn = document.querySelector(".twitterBtn");
const authorName = document.querySelector(".author");
const createdAt = document.querySelector(".createdAt");

const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random";
const options = { method: "GET", headers: { accept: "application/json" } };
const getQuote = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const {
      data: { content, author, dateAdded },
    } = data;
    // const {}
    quote.innerText = content;
    authorName.innerText = author;
    createdAt.innerText = dateAdded;
  } catch (error) {
    console.error(error);
  }
};
if (quote.innerText == "" || null ? getQuote() : "");

const copyQuote = () => {
  navigator.clipboard.writeText(quote.innerText);
  toast = new Toast("Copied!", Toast.TYPE_DONE, 20000);
  //   console.log(quote)
};
configureToasts({
  topOrigin: -500, // [default=0] Y-axis origin of the messages (better to use CSS `transform` instead).
  rightOrigin: 500, // [default=0] Y-axis origin of the messages (better to use CSS `transform` instead).
});

newQuoteBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);

// console.log("fetch : ", getQuote());
