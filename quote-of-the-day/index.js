const quote = document.querySelector(".quote");
const quoteDisplay = document.querySelector(".quoteDisplay");
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
if (quote.innerText == "" || quote.innerText == null) {
  getQuote();
}

const copyQuote = () => {
  navigator.clipboard.writeText(quote.innerText);
  toast = new Toast("Copied!", Toast.TYPE_DONE, 20000);
  //   console.log(quote)
};

configureToasts({
  topOrigin: -500, // [default=0] Y-axis origin of the messages (better to use CSS `transform` instead).
  rightOrigin: 500, // [default=0] Y-axis origin of the messages (better to use CSS `transform` instead).
});

const saveQuote = () => {
  html2canvas(quoteDisplay).then((canvas) => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL();
    a.setAttribute("download", "quote");
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};

newQuoteBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);
saveBtn.addEventListener("click", saveQuote);

// console.log("fetch : ", getQuote());
