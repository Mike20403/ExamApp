const express = require('express')
const router = express.Router()

const loginAPIController = require('../controllers/loginAPI.controller')

router.get('/', loginAPIController.login)

module.exports = router