let arr = [1, 2, 3, 4, 5, 6];
//NOTE - Built in  map()
arr.map((val, ind, arr) => {
  console.log(val);
});
//NOTE - map() Behind the sense
function myMap(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}
// Testing our custom map()

const sqrResult = myMap(arr, (val, indx, arr) => {
  return (val *= val);
});
console.log(sqrResult);
