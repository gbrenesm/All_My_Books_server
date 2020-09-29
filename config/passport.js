const User = require("../models/User")
const { compareSync } = require("bcrypt")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy


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

///////////////// Google /////////////////
passport.use(
  new GoogleStrategy(
      {
          clientID: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          callbackURL: process.env.GOOGLE_CALLBACK,
      },
      async (_, __, profile, done) => {
          const user = await User.findOne({ googleID: profile.id })
      if (!user) {
          const user = await User.create({
          username: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          profilePhoto: profile.photos[0].value
      })
        done(null, user)
      }
      done(null, user)
  })
)

///////////////// Facebook /////////////////
// passport.use(
//   new FacebookStrategy({
//     clientID: process.env.FACEBOOK_ID,
//     clientSecret: process.env.FACEBOOK_SECRET,
//     callbackURL: process.env.FACEBOOK_CALLBACK,
//     profileFields: ["id", "displayName", "photos", "email"]
//   },
//   async (accessToken, refreshToken, profile, done) => {
//     const user = await User.findOne({facebookId: profile.id })
//     if (!user){
//       const user = await User.create({
//         username: profile.displayName,
//         email: profile.emails[0].value,
//         facebookId: profile.id,
//         profilePhoto: profile.photos[0].value
//       })
//     done(null, user)
//     }
//     done(null, user)
//   }
//   )
// )


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

// passport.deserializeUser( async (id, cd) => {
//   User.findById(id)
//   .then(userDocument =>{
//     if (userDocument.password) userDocument.password = undefined
//     cd (null, userDocument)
//   })
//   .catch(err =>{
//     cb(err)
//   })
// })

module.exports = passport