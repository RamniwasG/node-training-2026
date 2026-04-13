const User = require("./../models/User")

const getUsers = async (req, res, next) => {
    const users = await User.find({})
    res.json({
        message: 'fetched successfully!',
        data: users
    })
}

const createUser = async (req, res, next) => {
    const { username, age, address } = req.body;
    const user = await User.create({ username, age, address })
    res.json({
        message: 'created successfully!',
        data: user
    })
}

const updateUser = async (req, res, next) => {
    const { userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
        userId, 
        { address: req.body.address },
        // { new: true },
        { returnDocument: 'after' } // ''before'
    )
    res.send({
        message: 'updated successfully!',
        user: updatedUser
    })
}

const removeUser = async (req, res, next) => {
    const { userId } = req.params;
    await User.findByIdAndDelete(userId)
    res.send({
        message: 'deleted successfully!'
    })
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    removeUser
}