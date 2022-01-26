require('dotenv').config()
const express = require('express')

const app = new express()

app.use('/', function(req, res)  {
    res.send('ok')
})



app.listen(process.env.PORT || 3001, function() {
    console.log('port ' + process.env.PORT)
})