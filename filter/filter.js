let arr = [1, 2, 3, 4, 5, 6, 7];
//NOTE - Built in filter()
const result = arr.filter((val, indx, arr) => {
  return val == 5;
});
console.log(result); // 5
