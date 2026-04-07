const express = require('express')

const router = express()

router.get('/connection', (req, res, next) => {
    console.log("connecting...")
    try {
        throw new Error("DB Connection failed")
    } catch(err) {
        next(err)
    }
})

module.exports = router;