const users = [
    { 
        id: 0,
        username: "admin",
        password: "12345",
        role: 'admin'
    },
    { 
        id: 1,
        username: "raman",
        password: "100100",
        role: 'user'
    }
]

module.exports = {
    usersList: users.sort((a,b) => a>b?1:a<b?-1:0)
}