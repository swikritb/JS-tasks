const input = "George Raymond Richard Martin";

// Split the input string into an array of words
const words = input.split(" ");

let initials = " ";
for (const word of words) {
  initials += word.charAt(0);
}

initials = initials.toUpperCase();

console.log(initials);
