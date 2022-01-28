require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDB = require('./src/db/connectDB')
const app = new express()

app.use(cors())

app.use('/api', function(req, res)  {
    res.json({
        names: ['Hung', 'Khuong']
    }
 )
})


const start = function() {
    connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT || 3001, function() {
        console.log('port ' + process.env.PORT)
    })
}

start()