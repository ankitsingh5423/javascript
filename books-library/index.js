const gridButton = document.querySelector(".gridIcon");
const booksGrid = document.querySelector(".library-books");
const bookName = document.querySelector(".bookName");
const authoName = document.querySelector(".authoName");
const writtenOn = document.querySelector(".writtenOn");
const bookImage = document.querySelector(".bookImage");
const category = document.querySelector(".category");
const booksHeader = document.querySelector(".books-header");
const inputText = document.querySelector(".inputText");

const url =
  "https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech";
// console.log(bookImage, bookName, writtenOn, category, authoName);

const gridToggle = () => {
  if (gridButton.classList.contains("fa-grip-vertical")) {
    gridButton.classList.remove("fa-grip-vertical");
    gridButton.classList.add("fa-grip");
    booksGrid.classList.add("column");
  } else {
    gridButton.classList.remove("fa-grip");
    gridButton.classList.add("fa-grip-vertical");
    booksGrid.classList.remove("column");
  }
};

const booksDetails = async () => {
  try {
    const response = await fetch(url);
    const booksData = await response.json();
    const {
      data: { data },
    } = booksData;

    let arr = [];
    arr.push(data);
    console.log(arr);

    const view = arr.map((e) => {
      return `<div class="book col-lg-3 col-md-6 col-sm-12">
                    <a href="#">
                        <img class="bookImage"
                            src="${e.volumeInfo.imageLinks.smallThumbnail}">
                    </a>
                    <div class="book-cover-detail">
                        <h5 class="bookName">${e.volumeInfo.title}</h5>
                        <small>
                            date : <span class="writtenOn">${e.volumeInfo.publishedDate}</span>
                        </small>
                        <small>
                            author : <span class="authoName">${e.volumeInfo.authors}</span>
                        </small>
                        <small>
                            category : <span class="category">${e.volumeInfo.categories}</span>
                        </small>
                    </div>
                </div>`;
    });
    booksGrid.innerHTML = view.join("");
  } catch (error) {
    console.error(error);
  }
};

booksDetails();
gridButton.addEventListener("click", gridToggle);
inputText.addEventListener("input", booksDetails);
