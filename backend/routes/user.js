const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user')
const { userSchema } = require('../schemas') 

router.get('/register', (req, res) =>{

})

router.post('/register', async(req, res) =>{
    const { email , username, password } = req.body
    const user = new User({email, username})
    const registerUser = await User.register( user, password)
    console.log(registerUser)
    registerUser.save()
})

router.post('/login', passport.authenticate('local'), (req,res) =>{
    console.log("Logged In")
})
module.exports = router