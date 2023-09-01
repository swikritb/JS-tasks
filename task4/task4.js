const input = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jennifer", age: 65 },
];

const sort = input.sort((a, b) => a.age - b.age);

const youngest = sort[0];
const oldest = sort[sort.length - 1];
const ageDiff = oldest.age - youngest.age;

console.log(youngest);
console.log(oldest);
console.log(ageDiff);
