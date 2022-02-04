
class loginAPIController {
    login(req, res) {
        res.json({
            ok: true
        })
    }
}

module.exports = new loginAPIController()