const orderBooks = [
  { name: "javascript", price: 20 },
  { name: "javascript", price: 50 },
  { name: "Rust", price: 580 },
  { name: "Python", price: 500 },
  { name: "C", price: 400 },
  { name: "C++", price: 400 },
  { name: "Java", price: 600 },
];
//NOTE - Built in find() method
let target_book = "C++";
const result = orderBooks.find((book, indx, arr) => {
  return book.name == "Rust";
});
console.log(result);
//NOTE - Custom  find() method
function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

const result2 = myFind(orderBooks, (book, indx) => {
  return book.name == "C";
});
console.log(result2);
//NOTE -  Findindex() method behind the sense

function myFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return i;
    }
  }
}
const result3 = myFind(orderBooks, (book) => {
  return book.price == 50;
});
console.log(result3);
