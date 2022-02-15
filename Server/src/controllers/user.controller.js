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

    // [GET] /users/:user_id
    async getOneUser (req, res) {
        let user = await User.findById(req.params.user_id)
        res.json({user})
    }

    // [PATCH] /users/:user_id
    async updateOneUser (req, res) {
        let user = await User.findByIdAndUpdate(req.params.user_id, req.body, {new: true})
        res.json({user})
    }

    // [DELETE] /users/:user_id
    deleteOneUser (req, res) {
        User.findOneAndDelete({_id: req.params.user_id})
            .then(() => res.status(200).end())
    }
}

module.exports = new UserController()