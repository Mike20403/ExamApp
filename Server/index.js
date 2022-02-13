require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDB = require('./src/db/connectDB')
const app = new express()

const initializeRoutes = require('./src/routes/')

app.use(cors())
app.use(express.json())

initializeRoutes(app)


const start = function() {
    connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT || 3001, function() {
        console.log('port ' + process.env.PORT)
    })
}

start()