const input = [12, 46, 32, 64];

// for mean
const sum = input.reduce((acc, cur) => acc + cur, 0);
const mean = sum / input.length;

//for median
const sortedInput = input.slice().sort((a, b) => a - b);
let median;

if (input.length % 2 === 0) {
  median =
    (sortedInput[Math.floor(input.length / 2) - 1] +
      sortedInput[input.length / 2]) /
    2;
} else {
  median = sortedInput[Math.floor(input.length / 2)];
}

console.log("mean:", mean);
console.log("median:", median);
