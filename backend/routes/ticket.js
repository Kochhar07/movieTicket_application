const express = require('express');
const router = express.Router();
const { ticketSchema } = require('../schemas') 
const { bookTicket, closeTicket, openTicket, cancelTicket, viewTicket, adminLogin, resetTicket } = require('../controllers/helper');

// validating ticket
const validateTicket = (req, res, next) => {
    const { error } = ticketSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        return res.status(404).json({
            statusCode: 404,
            status: false,
            message: msg
        })
    } else {
        next();
    }
}

// create ticket
router.post('/ticket',validateTicket, bookTicket)

// see all close_tickets
router.get('/ticket/close_ticket', closeTicket)

// see all open_tickets1
router.get('/ticket/open_ticket', openTicket)

// cancel ticket
router.delete('/ticket/cancel', cancelTicket)

// view ticket
router.get('/ticket/view_ticket', viewTicket)

// // to check db is connected
// router.get('/health', healthCheck)

// admin login
router.get('/admin', adminLogin)

// admin access to reset all tickets
router.delete('/admin/ticket_reset', resetTicket)

module.exports = router