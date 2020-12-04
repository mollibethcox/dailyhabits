import React, {useContext, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Item from "./Item";
import FormInput from "./FormInput";
import getDate from "../date";
import { Context } from "../context/habitsContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
});


function List(props) {
  const { state, getHabits } = useContext(Context);
  const classes = useStyles();

  const {month, day, dayOfWeek, isoDate} = getDate();
  const todaysDate = dayOfWeek + ", " + month + " " + day;

  useEffect(() => {
    getHabits();
  }, []);

  const dailyHabits = state;
  const doneItems = dailyHabits.filter((habit) => {
    const dates = habit.date;
    return dates.find((date) => date.isoDate === isoDate);
  });

  const toDoItems = dailyHabits.filter((habit) => {
    const dates = habit.date;
    const doneItems = dates.find((date) => date.isoDate === isoDate);
    if (!doneItems) {
      return habit;
    } else {
    return null;
    }
  });



  return (
    <div className={classes.root}>

    <div className="box">
    <h1 className="title">{todaysDate}</h1>
    </div>

    <div className="box">
      {toDoItems.map(habit => {
        return (
          <Item
          key={habit._id}
          id={habit._id}
          title={habit.title}
          color={habit.color}
          />
        );
      })}

      {doneItems.map(habit => {
        return (
          <Item
          key={habit._id}
          id={habit._id}
          title={habit.title}
          color={habit.color}
          />
        );
      })}
      <div>
      <FormInput
      />
      </div>

    </div>
    </div>
  );
}


export default List;
