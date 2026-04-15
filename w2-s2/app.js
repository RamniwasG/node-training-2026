const quizQuestions = require("./quiz.js")
const {
    calculateSum,
    doMultiplication
} = require('./calculate/index.js')

console.log("Task 1: see globalVariable.js \n================")

console.log("Task 2 \n Module calculator\n================")

const x = 30;
const y = 5;

console.log(`Sum of ${x}, ${y} = ${calculateSum(x, y)}`)
console.log(`Multiplication of ${x}, ${y} = ${doMultiplication(x, y)}`)

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
