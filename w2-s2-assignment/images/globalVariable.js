console.log("Task 1 \n Understanding of global variables in Node Environment \n================")
console.log(["global", "window", "self", "globalThis"].join(", "))

console.log("this : ", this) // {} -> module scope, not global

// console.log("self : ", self) // ReferenceError -> self is not defined

// console.log("window : ", window) // ReferenceError -> window is not defined
console.log("window is the global variable used on the browser and will be undefined in node environment")

console.log("global : ", global)
console.log("global keyword is used for the global variable in node.js environment")

console.log("globalThis: has been appointed as a universal global variable which is available and accessible \n both either browser environment or node envronment and is exactly same as window or global")
console.log("globalThis: ", globalThis)

console.log("this === global = ", this === global) // false
console.log("global === globalThis = ", globalThis === global) // true
console.log("this === globalThis = ", this === globalThis) // false
console.log("--End--\n================")
