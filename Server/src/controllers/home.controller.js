const User = require('../models/User.model')

class homeController {
    temp(req, res){
        res.json({
            ok: true
        })
    }
}

module.exports = new homeController()