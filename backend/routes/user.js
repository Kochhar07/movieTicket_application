const express = require('express');
const router = express.Router();
const User = require('../models/user')
const { userSchema } = require('../schemas') 




router.post('/register', async(req, res) =>{
    try {
    const body = req.body
        // validating if email is unique or not
    const user = await User.find({ email: body.email})
    if (user.length > 0){
        res.status(404).json({
            statusCode: 404,
            status: false,
            message: "Email ID is already in use"
        })
    } else{
        // creating new user
        // const new_user = new User(req.body)
        // new_user.save()
        const user = new User({ email, username})
        const regisUser = await user.register(user, password);
        console.log(regisUser)
        regisUser.save()
        // res.status(200).json({ message: "Registred Successfully", new_user})
    }
}
// some internal error
catch (error){
res.status(500).json("Some internal error occured", error)
}
})


module.exports = router