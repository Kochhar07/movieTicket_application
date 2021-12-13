const mongo = require("./db/mongo");
const express = require('express')
const User = require('./models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

mongo()

const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
passport.use(new LocalStrategy(User.authenticate()))


// Available Routes
app.use('/', require('./routes/user'))
app.use('/', require('./routes/ticket'))

app.listen(port, () => {
  console.log(`Listening backend part at http://localhost:${port}`)
})