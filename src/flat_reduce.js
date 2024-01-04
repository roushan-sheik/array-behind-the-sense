let arr = [1, [2, 3], 4, 5, [6, 7, 8], 9, 10];
// Lets make it one dimensional array using flat method
let result = arr.flat();
console.log(result);
// well, now lets make it using reduce method
let res = arr.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);
console.log(res);
