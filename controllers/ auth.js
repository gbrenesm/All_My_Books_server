const User = require ("../models/User")
const { hashSync, genSaltSync } = require ("bcrypt")

///////////////// Signup /////////////////

exports.signupProcess = async (req, res) => {
    const { username, email, password } = req.body
    if ()
}
