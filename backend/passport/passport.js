import JWTStrategy from 'passport-jwt'
import ExtractJWT from 'passport-jwt'
import User from '../dbModels/userSchema';
const opts = {};

opts.jwtFromRequest = ExtractJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JWTStrategy.Strategy(opts, (jwt_payload, done) => {
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

