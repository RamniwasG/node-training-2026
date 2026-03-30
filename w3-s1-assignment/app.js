const fs = require('fs');

// Synchronous reading file
console.log("====Syncronously file reading===")
console.log("====Start===")
const resp1 = fs.readFileSync('./w3-s1-assignment/content.txt', 'utf8');
console.log("resp1 ==> ", resp1)

const resp2 = fs.readFileSync('./w3-s1-assignment/content.txt', 'utf8');
console.log("resp2 ==> ", resp2)

console.log("====End===")

// Async reading file
console.log("====Async file reading===")
console.log("====Start===")
fs.readFile('./w3-s1-assignment/content.txt', 'utf8', (err, res) => {
    console.log("async resp1 ==>", res + '\n')
});
fs.readFile('./w3-s1-assignment/content.txt', 'utf8', (err, res) => {
    console.log("async resp2 ==>", res + '\n')
});
console.log("====End===\n")

console.log("====QA===")
fs.readFile('./w3-s1-assignment/qa.txt', 'utf8', (err, res) => {
    console.log(res + "\n")
});


setTimeout(() => console.log("Timer done!"), 0);

