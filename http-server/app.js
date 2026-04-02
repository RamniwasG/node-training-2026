const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/hello') {
        res.end("this hello routes")
        return
    } else if(req.url === '/routeToMe') {
        res.end("Hurrah!, you have entered in my routes")
        return
    }

    res.end('default route')
})

server.listen(5003, () => {
    console.log("server is running at 5003")
})