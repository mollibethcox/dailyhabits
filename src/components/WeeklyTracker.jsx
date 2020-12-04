import React from "react";
import List from "./List";
import Tabs from "./Tabs";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around"
  },
  item1: {

  },
  item2: {
    width: 600
  }
});

function WeeklyTracker() {
  const classes = useStyles();

  return (
  <div className={classes.container}>
    <div className={classes.item1}>
        <List />
     </div>
     <div className={classes.item2}>
      <Tabs />
      </div>
    </div>
  );
}

export default WeeklyTracker;
