const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
//const config = require('../config/database');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/json');
module.exports = function (passport) {

    passport.use(new LocalStrategy(
        function (username, password, done) {
            let query = { email: username };
            console.log(username);
            User.findOne(query, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    console.log('incorrect username')
                    return done(null, false, { message: 'Incorrect username.' });
                } else {
                    console.log(user);
                }

                bcrypt.compare(password, user.password, function (err, isMatch) {
                    if (err) throw err;
                    if (isMatch) {
                        console.log('right pass');
                        return done(null, user);
                    } else {
                        console.log('wrong pass');
                        return done(null, false, { message: 'Wrong Password .' });
                    }
                });

            });
        }
    ));
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}