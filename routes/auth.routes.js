const express = require("express")
const router = express.Router()

const { signupProcess, 
        loginProcess, 
        logout,
        currentUser} = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)

router.get("/currentuser", currentUser)
router.get("/logout", logout)

module.exports = router