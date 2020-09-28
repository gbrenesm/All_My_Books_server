const express = require("express")
const router = express.Router()

const { signupProcess, 
        loginProcess, 
        logout,
        currentUser,
        updateUserProcess} = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)

router.get("/currentuser", currentUser)

router.put("/updateuser", updateUserProcess)
router.get("/logout", logout)

module.exports = router