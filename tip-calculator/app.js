// store all the require items in variable
// make a function to calculate the percentage
// clickable the button and run function through it

let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
let totalAmount = document.getElementById("totalAmount");

const totalBill = () => {
  let convertedBill = Number(bill.value);
  let convertedTip = Number(tip.value);
  const test = (convertedBill * convertedTip) / 100 + convertedBill;
  totalAmount.innerText = test;
};
