const { time } = require("console");

const sentence = "hello there from lighthouse labs\n";
let delay = 0;

for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char);
  }, delay)
} 


