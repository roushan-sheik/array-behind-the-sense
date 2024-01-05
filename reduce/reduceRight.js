let arr = [1, 2, 3, 4, 5];

let result = arr.reduceRight((acc, cur) => {
  console.log(cur);
  return acc;
}, 0);
console.log(result);
