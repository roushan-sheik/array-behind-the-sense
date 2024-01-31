let arr = [1, 2, 3, 4, 5, 6];
//NOTE - Built in forEach()
const result = arr.forEach((val, indx, arr) => {
  console.log(val);
});
//NOTE - Foreach Behind the sense
function myForeach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
myForeach(arr, (val, ind, arr) => {
  console.log(val);
});
