const express = require('express')
const { isAdmin } = require('../middleware/auth')

const router = express()

router.get('/getData', isAdmin, (req, res) => {
    console.log("data sent")
    res.send("data retrieved ")
})

router.get('/deleteData', isAdmin, (req, res) => {
    console.log("deleted")
    res.send("delete data ")
})

module.exports = router