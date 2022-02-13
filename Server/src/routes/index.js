const loginAPI = require('./loginAPI')
const home = require('./home')
const user = require('./user')

const initializeRoutes = function(app) {
    app.use('/users', user)
    app.use('/api/login', loginAPI)
    app.use('/', home)
}

module.exports = initializeRoutes