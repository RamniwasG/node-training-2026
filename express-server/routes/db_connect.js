const express = require('express')

const router = express()

router.get('/', (req, res, next) => {
    console.log("connecting...")
    const connectionFailed = true
    try {
        if(!connectionFailed)
            throw new Error("DB Connection failed")
    } catch(err) {
        next(err)
    }
    console.log("DB Connected!")
    next()
})

module.exports = router;