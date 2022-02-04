const express = require('express')
const route = express.Router()

route.get('/', function(req, res) {
    res.json({
        names: ['Hung', 'Khuong']   
    })
})

module.exports = route