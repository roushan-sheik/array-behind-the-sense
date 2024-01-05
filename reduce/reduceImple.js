function myReduce(arr, cb, init) {
  let start = 0;
  let acc = init;
  if (!init) {
    acc = arr[0];
    start = 1;
  }
  for (let i = start; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}
// ================= Done =============
let arr = [1, 2, 3, 4, 5, 6];
let result = myReduce(arr, (acc, cur) => {
  return acc + cur;
});
console.log(result);
