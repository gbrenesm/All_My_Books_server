const express = require("express")
const router = express.Router()
const passport = require("../config/passport")

const { signupProcess, 
        loginProcess, 
        logout,
        currentUser,
        updateUserProcess,
        googleProcess,
        googleRedirect,
        facebookProcess,
        facebookRedirect} = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)
router.get("/google", googleProcess)
router.get("/google/callback", googleRedirect)
router.get("/facebook", facebookProcess)
router.get("/facebook/callback", facebookRedirect)

router.get("/currentuser", currentUser)

router.put("/updateuser", updateUserProcess)
router.get("/logout", logout)


module.exports = router