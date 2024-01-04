let arr = [1, 2, 3, 4, 5, 6];
let result1 = arr.map((item) => [item * 2]).flat();
console.log(result1);
// flatMap
let result2 = arr.flatMap((item) => [item * 2]);
console.log(result2);
// make it 2d arr using reduce method
let result3 = arr.reduce((acc, cur) => {
  return acc.concat(cur * 2);
}, []);
console.log(result3);
