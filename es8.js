function sumNumbers() {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }

  return total;
}
//example
const result = sumNumbers(5, 10, 15, 20);
console.log(result);
