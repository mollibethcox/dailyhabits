import React, {useContext} from "react";
import Grid from '@material-ui/core/Grid';
import TotalCounter from "./TotalCounter";
import { Context } from "../context/habitsContext";



function Totals() {
  const { state } = useContext(Context);

  return (
    <Grid container justify="center">
    {state.map((habit) => (
      <TotalCounter
        key={habit._id}
        id={habit._id}
        title={habit.title}
        color={habit.color}
        total={(habit.date).length}
      />
    ))}
    </Grid>
  );
}


export default Totals;
