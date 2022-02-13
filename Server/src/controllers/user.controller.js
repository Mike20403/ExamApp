const User = require('../models/User.model')

class UserController {
    // [GET] /users
    async getAllUsers (req, res) {
        let users = await User.find({})
        res.json({users})
    }

    // [POST] /users
    async createOneUser (req, res) {
        const user = await User.create(req.body)
        res.json({user})
    }
}

module.exports = new UserController()