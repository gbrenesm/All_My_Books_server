const User = require ("../models/User")
const { hashSync, genSaltSync } = require ("bcrypt")
const express = require ("express")
const passport = require("../config/passport")


///////////////// Signup /////////////////

exports.signupProcess = async (req, res) => {
    const { username, email, password } = req.body
    if (username === "" || email === "" || password === "")
        return res.status(401).json({message: "Por favor llena todos los campos"})
    const existingUser = await User.findOne({ email })
    if (existingUser)
        return res.status(401).json({message: "El email ya está registrado"})
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

///////////////// Current user /////////////////
exports.currentUser = (req, res) => {
    res.status(200).json({ user: req.user})
}

///////////////// Logout /////////////////

exports.logout = (req, res) => {
    req.logout()
    res.status(200).json({message: "Sesión finalizada exitosamente"})
}