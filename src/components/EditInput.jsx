import React, {useState, useContext} from "react";
import DoneIcon from '@material-ui/icons/Done';
import { Context } from "../context/habitsContext";

function EditInput({ id, title, color }) {
  const { editHabit } = useContext(Context);

  const [newTitle, setTitle] = useState(title);
  const [newColor, setColor] = useState(color);

  function handleColor(event) {
    const { value } = event.target;
    setColor(value);
  }

  function handleText(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function handleSubmit(event) {
    editHabit(id, newTitle, newColor);

    event.preventDefault();
    window.location = "/";
  }

  return (
    <form className="item">
      <label className="circle" style={{backgroundColor: newColor}}>
        <input onChange={handleColor} type="color" name="color" value={newColor} />
      </label>
      <input onChange={handleText} type="text" name="title" value={newTitle} autoFocus={true} />
      <button onClick={handleSubmit}
      type="submit" name="list" className="add-btn">
      <DoneIcon />
      </button>
    </form>
  )
}

export default EditInput;
