const mongoose = require('mongoose');
module.exports =  () => {
    try {
         mongoose.connect('mongodb://localhost:27017/movie-ticket', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected");
    }
    catch (err) {
        console.log("Database error")
        throw err;
    }
}