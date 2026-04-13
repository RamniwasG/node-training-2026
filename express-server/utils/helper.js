const generateISBN13 = () => {
    const prefix = "978" // standard book prefix
    let digits = prefix
    for(let i=0; i<9; i++) {
        digits += Math.floor(Math.random() * 10)
    }

    // calculate checksum
    let sum = 0;
    for(let i=0; i<12; i++) {
        const num = parseInt(digits[i])
        sum += i % 2 === 0 ? num : num * 3
    }
    const checkDigit = (10 - (sum % 10)) * 10
    console.log(digits + checkDigit)
    return digits + checkDigit
}

module.exports = {
    generateISBN13
}