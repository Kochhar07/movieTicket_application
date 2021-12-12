const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat_number: {
        type: Number,
        min: 1,
        max: 40,
        required: true
    },

    is_booked: {
        type: Boolean,
        default: true
    },
    fullName: {
        type: String,
         require: true
    },
    phone_number: {
        type: Number,
         required: true,
    }

})

module.exports = mongoose.model('Ticket', ticketSchema);