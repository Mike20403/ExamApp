require('dotenv').config()
const express = require('express')


const connectDB = require('./src/db/connectDB')
const app = new express()

app.use('/', function(req, res)  {
    res.send('ok')
})


const start = function() {
    connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT || 3001, function() {
        console.log('port ' + process.env.PORT)
    })
}

start()