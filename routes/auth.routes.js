const express = require("express")
const { route } = require("./index.routes")
const router = express.Router()

const { signupProcess, 
        loginProcess } = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)

module.exports = router