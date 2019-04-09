const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJWT;
const mongoose = require('mongoose');
const User = require('../dbModels/userSchema');
const options = {};

options.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
options.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JWTStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if(user) {
                return done(null, user);  
            }
            return done(null, false);
        })
        .catch(err => console.error(err))
    }));
}