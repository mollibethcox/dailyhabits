import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./TabPanel";
import Weekly from "./Weekly";
import Calendar from "./Calendar";
import Totals from "./Totals";
import Grid from '@material-ui/core/Grid';
import { Context } from "../context/habitsContext";



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    alignItems: "center",
    marginTop: 50
  },
});

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    backgroundColor: '#fff',
   '& > span': {
     maxWidth: 40,
     width: '100%',
     backgroundColor: '#fff',
 },
}})(Tabs);

const StyledTab = withStyles({
 root: {
   textTransform: 'none',
   color: "rgba(255,255,255,.5)",
   '&:focus': {
       color: '#fff',
     },
   '&$selected': {
   color: '#fff',
    },
},
selected: {},
})((props) => <Tab disableRipple {...props} />);

export default function FullWidthTabs(props) {
  const { state } = useContext(Context);

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: "#393e46"}} className="tab-bar" position="static" color="default">
        <StyledTabs
          className="tab-title"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <StyledTab label="WEEKLY"  />
          <StyledTab label="MONTHLY"  />
          <StyledTab label="TOTAL"  />
        </StyledTabs>
      </AppBar>

        <TabPanel value={value} index={0} dir={theme.direction}>
        <Grid container justify="center">
          {state.map(habit => (
            <Weekly
            key={habit._id}
            id={habit._id}
            title={habit.title}
            color={habit.color}
            />
          ))}
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Grid container justify="center">
          <Calendar />
        </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container justify="center">
            <Totals />
          </Grid>
        </TabPanel>
    </div>
  );
}
