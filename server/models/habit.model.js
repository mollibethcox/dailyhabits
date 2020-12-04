const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema (
  {
    username: String,
    title: {type: String, required:true},
    color: {type: String, required: true},
    date: [],
  },
  { timestamps: true}, );

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;
