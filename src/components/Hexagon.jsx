import React, {useState, useContext, useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import { Context } from "../context/habitsContext";



function Hexagon({ title, color, name, id, doneDate }) {
  const [done, setDone] = useState(false);
  const { state } = useContext(Context);

  const habit = state.find((habit) => habit._id === id);
  const dates = habit.date;

  useEffect(() => {
      const isDone = dates.find((date) => date.isoDate === doneDate);
      return setDone(isDone ? true : false);
  }, [doneDate, dates]);


  return(
    <Grid item className="hex">
        <div className="hexIn">
        <span className="hexLink">
            <div className="hex-background" style={{backgroundColor: color, backgroundImage: done && "none"}}></div>
            <h1 className="title">{title}</h1>
            <p>{name}</p>
          </span>
        </div>
      </Grid>
  );

}

export default Hexagon;
