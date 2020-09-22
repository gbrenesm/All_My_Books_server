const express = require("express")
const { route } = require("./index.routes")
const router = express.Router()

const { signupProcess, 
        loginProcess, 
        logout} = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)

router.get("/logout", logout)

module.exports = router