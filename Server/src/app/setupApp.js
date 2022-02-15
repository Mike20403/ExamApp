const connectDB = require('../db/connectDB')

const cors = require('cors')

const setupApp = function(app) {
    app.use(cors())
    connectDB(process.env.MONGO_URI)
    app.listen(process.env.PORT || 3001, function() {
        console.log('port ' + process.env.PORT)
    })
}

module.exports = setupApp