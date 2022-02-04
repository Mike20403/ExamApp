const home = require('./home')

const initializeRoutes = function(app) {
    app.use('/api', home)
}

module.exports = initializeRoutes