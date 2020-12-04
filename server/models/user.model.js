const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
//const passport = require("passport");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: String,
}, {
  timestamps: true,
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model('User', userSchema);

/*passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());*/



module.exports = User;
