const express = require('express')
const { isAuthenticated, isAuthorized } = require('../middlewares/auth')
const asyncHandler = require('./../middlewares/asyncHandler');
const { usersList } = require("./../db/index");
const { createUser, getUsers, updateUser, removeUser } = require('../controllers/user');

const router = express()

router.get('/getAll', getUsers)
router.post('/create', createUser)
router.put('/update/:userId', updateUser)
router.delete('/remove/:userId', removeUser)

module.exports = router