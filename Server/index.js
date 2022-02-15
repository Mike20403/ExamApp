require('dotenv').config()

const express = require('express')
const app = express()

const initializeRoutes = require('./src/routes/')
const setupApp = require('./src/app/setupApp')

app.use(express.json())

initializeRoutes(app)
setupApp(app)