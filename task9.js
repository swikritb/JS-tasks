function isUndefined(value) {
  return value === undefined;
}

console.log(isUndefined(undefined)); //true
console.log(isUndefined("hello")); // false
console.log(isUndefined(1)); //false
