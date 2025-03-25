const gridButton = document.querySelector(".gridIcon");
const booksGrid = document.querySelector(".library-books");
const bookName = document.querySelector(".bookName");
const authoName = document.querySelector(".authoName");
const writtenOn = document.querySelector(".writtenOn");
const bookImage = document.querySelector(".bookImage");
const category = document.querySelector(".category");

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
    const [id] = data;
    console.log(data, id);
  } catch (error) {
    console.error(error);
  }
};

booksDetails();

gridButton.addEventListener("click", gridToggle);
