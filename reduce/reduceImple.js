function myReduce(arr, cb, init) {
  let acc = init;
  let start = 0;
  if (!init) {
    acc = arr[0];
    start = 1;
  }

  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}
let arr = [1, 2, 3, 4, 5];
const result = myReduce(arr, (acc, cur) => {
  return acc + cur;
});
console.log(result);
// ====================== Done ======================
