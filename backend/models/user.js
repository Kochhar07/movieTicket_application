const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // password:{
    //     type: String,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now
    }

})

//  UserSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', UserSchema);;