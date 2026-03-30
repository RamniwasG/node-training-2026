const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 2 // can be 2 / 4 / 8
console.log("default thread pool size: ", process.env.UV_THREADPOOL_SIZE)

// 8 CPU intensive tasks
console.log("task 1 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("1 done");
    console.log("task 1 end time ", new Date().getMilliseconds())
});

console.log("task 2 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("2 done");
    console.log("task 2 end time ", new Date().getMilliseconds())
});

console.log("task 3 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("3 done");
    console.log("task 3 end time ", new Date().getMilliseconds())
});

console.log("task 4 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("4 done");
    console.log("task 4 end time ", new Date().getMilliseconds())
});

console.log("task 5 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("5 done");
    console.log("task 5 end time ", new Date().getMilliseconds())
});

console.log("task 6 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("6 done");
    console.log("task 6 end time ", new Date().getMilliseconds())
});

console.log("task 7 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("7 done");
    console.log("task 7 end time ", new Date().getMilliseconds())
});

console.log("task 8 start time ", new Date().getMilliseconds())
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () => {
    console.log("8 done");
    console.log("task 8 end time ", new Date().getMilliseconds())
});
