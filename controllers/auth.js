const User = require ("../models/User")
const { hashSync, genSaltSync } = require ("bcrypt")
const express = require ("express")
const passport = require("../config/passport")


///////////////// Signup /////////////////

exports.signupProcess = async (req, res) => {
    const { username, email, password } = req.body
    if (username === "" || email === "" || password === "")
        return res.status(401).json({message: "Por favor, llena todos los campos"})
    const existingUser = await User.findOne({ email })
    if (existingUser)
        return res.status(401).json({message: "El email ya está registrado, por favor intenta con otro"})
    const hashPswd = hashSync(password, genSaltSync(12))
    await User.create({
    username,
    email,
    password: hashPswd
    })
    res.status(200).json({message: "Se creó correctamente el usuario"})
}

///////////////// Login /////////////////

exports.loginProcess = (req, res, next) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if (err){
            console.log(failureDetails)
            res.status(500).json({message: "Algo salió mal"})
            return
        }

        if (!user){
            res.status(401).json({message: "Email o contraseña incorrectos"})
            return
        }
        
        req.login(user, err => {
            if (err) {
                res.status(500).json({message: "No se pudo guardar la sesión"})
                return
            }
            res.status(200).json(user)
        })
    })(req, res, next)  
}

///////////////// Google /////////////////

exports.googleProcess =  passport.authenticate("google", { scope: ["profile", "email"] })

exports.googleRedirect = (req, res, next) => {
    passport.authenticate("google", { scope: ["email"] }, (err, user, info) => {
        if (err) return res.status(500).json({ err, info })
        if (!user) return res.status(401).json({ err, info })
        req.login(user, error => {
            if (error) return res.status(401).json({ error })
            return res.redirect(process.env.FRONTENDPOINT + "/userhome")
        })
    })(req, res, next)
}

///////////////// Current user /////////////////
exports.currentUser = async (req, res) => {
    const user = await User.findById(req.user.id).populate("shelves")
    res.status(200).json({ user })
}

///////////////// Update user /////////////////
exports.updateUserProcess = async (req, res) => {
    const { username, password, email, profilePhoto, } = req.body
    const user = await User.findByIdAndUpdate(req.user.id, {
        username,
        email,
        profilePhoto
    }, { new: true})
    res.status(202).json({ user })
}

///////////////// Logout /////////////////

exports.logout = (req, res) => {
    req.logout()
    res.status(200).json({message: "Sesión finalizada exitosamente"})
}