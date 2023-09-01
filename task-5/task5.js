function factorial(input) {
  if (input === 0 || input === 1) {
    return 1;
  }
  return input * factorial(input - 1);
}

const input = 6;
const result = factorial(input);

console.log(result);
