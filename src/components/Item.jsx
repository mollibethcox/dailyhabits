import React, {useState, useContext, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import EditInput from "./EditInput";
import getDate from "../date";
import { Context } from "../context/habitsContext";


function Item(props) {
  const { state, deleteHabit, markHabitDone, undoDone } = useContext(Context);
  const classes = useStyles(props);
  const [isDone, setDone] = useState();
  const [isFocused, setFocus] = useState(false);
  const [editIconFocused, setEditFocus] = useState(false);
  const [deleteIconFocused, setDeleteFocus] = useState(false);
  const [isEditing, setEditing] = useState(false);

  const today = getDate();
  const habit = state.find((habit) => habit._id === props.id);
  const dates = habit.date;
  const done = dates.find((date) => date.isoDate === today.isoDate);


  useEffect(() => {
    setDone(() => {
      if (done) {
        return true;
      } else {
        return false;
      }
    });
  }, [done]);


  function handleMouseOver() {setFocus(true)};
  function handleMouseOut() {setFocus(false)};
  function editIconOver() {setEditFocus(true)};
  function editIconOut() {setEditFocus(false)};
  function deleteIconOver() {setDeleteFocus(true)};
  function deleteIconOut() {setDeleteFocus(false)};

  function handleMarkDone() {
    setDone((prevValue) => {
      if (prevValue === false) {
        if (!done) {
          markHabitDone(props.id, today)};
        return true;
      } else {
        undoDone(props.id);
        return false;
      }
    });

    window.location = "/";
  };

  function handleEdit() {
    setEditing(true);
  }

  function handleDelete() {
    deleteHabit(props.id);
    window.location = "/";
  }

  return (
    <div >
    { isEditing ? <EditInput id={props.id} title={props.title} color={props.color} /> :
    <div className="item"  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
      <span className={classes.alignLeft}>
      <button onClick={handleMarkDone} style={{borderColor: isDone ? "grey" : "white", backgroundColor: isDone ? props.color : "transparent"}} className="circle" />
      <p className={ isDone ? classes.done : classes.root} >{props.title}</p>
      </span>
      <span className={classes.alignRight}>
        <EditIcon onClick={handleEdit} onMouseOver={editIconOver} onMouseOut={editIconOut} className={editIconFocused ? classes.iconFocus : isFocused ? classes.iconHover : classes.icon} />
        <DeleteIcon onClick={handleDelete} onMouseOver={deleteIconOver} onMouseOut={deleteIconOut} className={deleteIconFocused ? classes.iconFocus : isFocused ? classes.iconHover : classes.icon} />
      </span>
    </div> }
    </div>
  );
};

const useStyles = makeStyles({
    root: ({ color }) => ({
      background: "linear-gradient(180deg, #393e46 60%, " + color + " 65%)",
      borderBottom: "solid 1px transparent",
      borderBottomLeftRadius: "3px",
      borderBottomRightRadius: "3px",
    }),
    done: {
      textDecoration: "line-through",
      textDecorationColor: "grey",
      color: "grey",
    },
    icon: {
      visibility: "hidden",
    },
    iconHover: {
      color: "grey",
      margin: "0 7px",
    },
    iconFocus: {
      color: "white",
      margin: "0 7px",
    },
    alignLeft: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    alignRight: {
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "3%",
    }
});


export default Item;
