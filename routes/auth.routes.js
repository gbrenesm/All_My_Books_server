const express = require("express")
const router = express.Router()
const passport = require("../config/passport")

const { signupProcess, 
        loginProcess, 
        logout,
        currentUser,
        updateUserProcess,
        googleProcess} = require("../controllers/auth")

router.post("/signup", signupProcess)
router.post("/login", loginProcess)
router.get("/google", googleProcess)

router.get("/currentuser", currentUser)

router.put("/updateuser", updateUserProcess)
router.get("/logout", logout)

router.get("/google/callback", (req, res, next) => {
        passport.authenticate("google", { scope: ["email"] }, (err, user, info) => {
          if (err) return res.status(500).json({ err, info })
          if (!user) return res.status(401).json({ err, info })
      
          req.login(user, error => {
            if (error) return res.status(401).json({ error })
            return res.redirect(process.env.FRONTENDPOINT + "/userhome")
          })
        })(req, res, next)
})

module.exports = router