const mongoose = require('mongoose')

const connectDB = function(mongoURI) {
    mongoose.connect(mongoURI, function() {
        console.log('connected to db')
    })
}

module.exports = connectDB