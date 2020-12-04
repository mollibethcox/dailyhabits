import React, {useState, useContext} from "react";
import { Context } from "../context/habitsContext";

function FormInput() {
  const { addHabit } = useContext(Context);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#50a3a2");

  function handleColor(event) {
    const { value } = event.target;
    setColor(value);
  }

  function handleText(event) {
    const { value } = event.target;
    setTitle(value);
  }

  function handleSubmit(event) {
    addHabit(title, color);

    event.preventDefault();
    window.location = "/";
  }


  return (
    <form className="item newItem">
      <label className="circle" style={{backgroundColor: color}}>
        <input
          onChange={handleColor}
          type="color"
          name="color"
          value={color}
        />
      </label>
      <input
        onChange={handleText}
        type="text"
        name="title"
        placeholder="New Habit"
        value={title}
      />
      <button onClick={handleSubmit}
      type="submit" name="list" className="add-btn">+</button>
    </form>
  )
}

export default FormInput;
