
const router = require('express').Router();
let Habit = require('../models/habit.model');

router.route('/').get((req, res) => {
  Habit.find()
    .then(habits => res.json(habits))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // const username = req.body.username;
  const title = req.body.title;
  const color = req.body.color;


  const newHabit = new Habit({
    // username,
    title,
    color,
  });

  newHabit.save()
  .then(() => res.json('Habit added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/dates/:id").get(function (req, res) {
  Habit.findById(req.params.id, function(err, foundHabit) {
    if (!err) {
      if (foundHabit) {
        res.json(foundHabit.date);
      }
    } else {
      console.log(err);
    }
  });
});

router.route("/:id").delete(function (req, res) {
  Habit.findByIdAndDelete(req.params.id, function(err) {
    if (!err) {
      res.json("Habit deleted.")
    } else {
      console.log(err);
    }
  });
});

router.route("/update/:id").patch(function (req, res) {
  Habit.findById(req.params.id, function(err, foundHabit) {
    if (!err) {
      if (foundHabit) {
        // foundHabit.username = req.body.username;
        foundHabit.title = req.body.title;
        foundHabit.color = req.body.color;
        foundHabit.save(function(err) {
          if (!err) {
            res.json("Habit updated!");
          } else {
            res.send(err);
          }
        });
      }
    } else {
      console.log(err);
    }

  });
});

router.route("/complete/:id").post(function (req, res) {
  Habit.findById(req.params.id, function(err, foundHabit) {
    if (!err) {
      if (foundHabit) {
        const date = req.body.date;
        foundHabit.date.push(date);
        foundHabit.save(function(err) {
          if (!err) {
            res.json("Habit completed today!");
          } else {
            res.send(err);
          }
        });

      }
    } else {
      console.log(err);
    }
  });
});

router.route("/undocomplete/:id").patch(function (req, res) {
  Habit.findById(req.params.id, function(err, foundHabit) {
    if (!err) {
      if (foundHabit) {
        foundHabit.date.pop();
        foundHabit.save();
      }
    }
  })
});




module.exports = router;
