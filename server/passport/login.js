const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model');
const bCrypt = require('bcryptjs');

module.exports = function(passport){

    passport.use('login', new LocalStrategy({
        passReqToCallback : true
    },
    function(req, username, password, done) {
        // check in mongo if a user with username exists or not
        User.findOne({ 'username' :  username },
        function(err, user) {
            // In case of any error, return using the done method
            if (err)
            return done(err);
            // Username does not exist, log error & redirect back
            if (!user){
            console.log('User Not Found with username '+username);
            return done(null, false,
                req.flash('message', 'User Not found.'));
            }
            // User exists but wrong password, log the error
            if (!isValidPassword(user, password)){
            console.log('Invalid Credentials');
            return done(null, false,
                req.flash('message', 'Invalid Credentials'));
            }
            // User and password both match, return user from
            // done method which will be treated like success
            return done(null, user);
        }
        );
    }));

    // The package bcryptjs is used for hashing and comparing passwords
    const isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    }

}
