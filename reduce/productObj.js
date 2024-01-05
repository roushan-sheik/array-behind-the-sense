const orderBooks = [
  { name: "javascript", price: 250 },
  { name: "javascript", price: 250 },
  { name: "Rust", price: 580 },
  { name: "Rust", price: 580 },
  { name: "Python", price: 500 },
  { name: "Python", price: 500 },
  { name: "Python", price: 500 },
  { name: "C++", price: 400 },
  { name: "C++", price: 400 },
  { name: "Java", price: 600 },
  { name: "Java", price: 600 },
];
// make an order obj using reduce method
let result = orderBooks.reduce((acc, cur) => {
  if (acc[cur.name]) {
    acc[cur.name].quantity++;
    acc[cur.name].price += cur.price;
  } else {
    acc[cur.name] = {
      price: cur.price,
      quantity: 1,
    };
  }
  // return accumulator
  return acc;
}, {});
console.log(result);
