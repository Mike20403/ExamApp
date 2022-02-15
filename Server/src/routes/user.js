const express = require('express')
const UserController = require('../controllers/user.controller')

const router = express.Router()

router.get('/:user_id', UserController.getOneUser)
      .patch('/:user_id', UserController.updateOneUser)
      .delete('/:user_id', UserController.deleteOneUser)

router.post('/', UserController.createOneUser)
      .get('/', UserController.getAllUsers)

module.exports = router