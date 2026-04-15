const express = require('express')
const router = express()

router.get("/", (req, res) => {
    console.log("request query", req.query)
    res.send(req.query)
})

router.get("/:userId", (req, res) => {
    console.log("request params", req.params)
    res.send(
        `If dyanmic route order is first and share the same root then it will always take the higher preference 
        and never let it go to the next static route becauase it will always consider the pathsublevel as 
        query params value: User Id: ${req.params.userId}`
    )
})

router.get("/test", (req, res) => {
    console.log("static route share same root /users", req.params)
    res.send(
        `If static route order is first then Static routes takes first preference if they share same root:
        User Id: ${req.params.userId} becuase test is considered as sublevel path not as dynamic query params`
    )
})

router.post("/", (req, res) => {
    res.send('user created successfully')
})

router.delete("/:userId", (req, res) => {
    res.send(`User Id: [${req.params.userId}] deleted`)
})

module.exports = router;