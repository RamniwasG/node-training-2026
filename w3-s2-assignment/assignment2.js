const fs = require('fs');

console.log("start");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("promise"));

const data = fs.readFileSync('./w3-s2-assignment/test.txt', 'utf-8')
console.log("sync data => ", data);

fs.readFile('./w3-s2-assignment/test.txt', 'utf-8', (err, res) => {
    console.log("async resp => ", res)
})
