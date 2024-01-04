let votes = [
  "Javascript",
  "Python",
  "Python",
  "Javascript",
  "Python",
  "Rust",
  "C++",
  "Javascript",
  "Java",
  "Java",
  "Python",
  "C++",
  "Python",
  "Javascript",
  "Javascript",
  "Java",
  "Javascript",
];
const result = votes.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});

console.log(result);
