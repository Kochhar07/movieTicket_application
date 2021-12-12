const Joi = require('joi');
const { number } = require('joi');



// module.exports.userSchema = Joi.object({
//     name: Joi.number().required().min(1).max(40),
//     email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
//     password: Joi.string()
//     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
// }).required()



module.exports.ticketSchema = Joi.object({
    seat_number: Joi.number().required().min(1).max(40),
    phone_number: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    fullname: Joi.string().required().alphanum()

}).required()