function sumOfPositiveNumbers(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sum += input[i];
    }
  }

  return sum;
}

const input = [1, -4, 12, 0, -3, 29, -150];
const result = sumOfPositiveNumbers(input);
console.log(result); // Output will be 42 (1 + 12 + 29)
