const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];

const result = {};

for (const innerArray of input) {
  for (const element of innerArray) {
    if (result[element]) {
      // If it exists, increment the count
      result[element]++;
    } else {
      // If it doesn't exist, initialize the count to 1
      result[element] = 1;
    }
  }
}

console.log(result);
