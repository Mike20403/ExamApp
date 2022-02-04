const loginAPI = require('./loginAPI')
const home = require('./home')
const initializeRoutes = function(app) {
    app.use('/api/login', loginAPI)
    app.use('/', home)
}

module.exports = initializeRoutes