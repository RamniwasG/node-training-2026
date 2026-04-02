const http = require('http');

const server = http.createServer((req, res) => {
    const { url } = req;
    let resp;
    console.log(url)
    switch(url) {
        case '/':
            resp = 'Welcome Home'
            break;
        case '/about':
            resp = "About page"
            break;
        case '/api/user':
            resp = "{ 'name': 'Raman', 'age': 35 }"
            break;
        default:
            resp = 'unknown route'
    }
    
    res.end(resp)
})

server.listen(5003, () => {
    console.log("server is running at 5003")
})