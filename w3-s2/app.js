const fs = require('fs');

console.log("start");

setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

console.log("end");

console.log("===QA====")

fs.readFile('./w3-s2-assignment/qa.txt', 'utf-8', (err, res) => {
    console.log(res);
})


//  Q 14
// function recursive() {
//     process.nextTick(recursive);
// }
// recursive();
// setTimeout(() => console.log("Timer"), 0);

fs.readFile('./w3-s2-assignment/test.txt', 'utf-8', (err, res) => {
    console.log("results == ", res)
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));
});