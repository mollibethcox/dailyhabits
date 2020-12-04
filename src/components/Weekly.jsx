import React from "react";
import Hexagon from "./Hexagon";
import Grid from '@material-ui/core/Grid';
import getWeek from "../days";


function Weekly({ id, title, color }) {

  const currentWeek = getWeek();

  return (
    <Grid item xs={9} >
    <Grid container id="hexGrid">
    {currentWeek.map(day => (
          <Hexagon
          key={day.day}
          name={day.dayName}
          title={title}
          color={color}
          id={id}
          doneDate={day.day}
          /> )
    )}
    </Grid>
    </Grid>
  );
}


export default Weekly;
