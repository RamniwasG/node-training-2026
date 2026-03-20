const quizQuestions = require("./quiz.js")
const {
    calculateSum,
    doMultiplication
} = require('./calculate/index.js')

// console.log("quiz Questions:", quizQuestions)

console.log("Quiz\n================\n")
quizQuestions.forEach((q, i) => {
    console.log(`Q${i+1}: ${q.label} \n`)
    q.options.forEach((o, i) => {
        console.log(`${i+1}) ${o}\n`)
    })
    console.log("Correct Answer: " + q.ans + "\n")
})

console.log("\n--Quiz end--\n================\n")

console.log("Task 1 \n Understanding of global variables\n================")
console.log(["global", "window", "self", "globalThis"].join(", "))

console.log("global keyword is used for the global variable in node.js environment \n see the global variable console log below \n ", global)
console.log("window is the global variable used on the browser and will be undefined in node environment") // window -> place the window inside the console you will see reference error -- window is not definec

let self = this;
console.log("self in node environment")
console.log(self)

console.log("globalThis: has been appointed as a universal global variable which is available and accessible \n both either browser environment or node envronment and is exactly same as window or global")
console.log(globalThis)
console.log("--End--\n================")


console.log("Task 2 \n Module calculator\n================")

const x = 30;
const y = 5;

console.log(`Sum of ${x}, ${y} = ${calculateSum(x, y)}`)
console.log(`Multiplication of ${x}, ${y} = ${doMultiplication(x, y)}`)
