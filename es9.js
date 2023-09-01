function es9() {
  let arr = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  console.log(arr);
}
es9(1, 2, "john");
es9(1, 2, "john", [1, 2, 3]);
