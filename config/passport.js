const User = require("../models/User")
const { compareSync } = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy


///////////////// Local /////////////////

passport.use(
  new LocalStrategy(
    {
      usernameField: "email"
    },
    async (email, password, done) =>{
      try {
        const user = await User.findOne({ email })
        if (!user)
          return done(null, false, {message: "Email o contraseña incorrectos"})
        if (!compareSync(password, user.password))
          return done(null, false, {message: "Email o contraseña incorrectos"})
        done(null, user)
      }
      catch (error) {
        console.log(error)
        done(error)
      }
    }
  )
)


///////////////// Serealizer and deserealizer /////////////////

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser( async (id, done) => {
  try{
    const user = await User.findById(id)
    delete user.password
    done (null, user)
  }
  catch(error){
    done (error)
  }
})

module.exports = passport