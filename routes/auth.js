const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var User = require("../models/userInfo");
// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = function (passport) {
    router.use(function (req, res) {
        var body = req.body,
            name = body.name,
            email = body.email,
            password = body.password;
        User.findOne({ name: name }, function (err, doc) {
            if (err) { res.status(500).send('error occured') }
            else {
                if (doc) {
                    res.status(500).send('User already exists')
                }
                else {
                    var record = new User({
                        name: name
                    })
                }
            }
        })
        return router;
    })
}
