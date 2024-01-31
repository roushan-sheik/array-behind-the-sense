let arr = [1, 2, 3, 4, 5, 6, 7];
//NOTE - Built in filter()
const result = arr.filter((val, indx, arr) => {
  return val == 5;
});
console.log(result); // [5]
//NOTE - filter() method behind the sense
function myFilter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i], i, arr);
    if (temp) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
//NOTE - filter() method testing
let target = 4;
const result2 = myFilter(arr, (val, indx, arr) => {
  return val == target;
});
console.log(result2); //[4]
