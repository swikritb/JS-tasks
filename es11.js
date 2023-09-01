function es11() {
  let count = 0;
  return function () {
    return count++;
  };
}
let increment = es11();
console.log(increment());
console.log(increment());
console.log(increment());
