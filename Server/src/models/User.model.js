const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'User must have a name'],
        minlength: 2,
        maxlength: 30
    },
    password: {
        type: String,
        required: [true, 'User must have a password'],
        minlength: 8
    },
    classname: {
        type: String
    },
    // classId: {
    //     type: mongoose.Types.ObjectId
    // },
    isTeacher: {
        type: Boolean,
        default: false,
        immutable: true
    },
})

module.exports = mongoose.model('users', userSchema)