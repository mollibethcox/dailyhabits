import React, {useState, useContext, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Context } from "../context/habitsContext";


// must manually import the stylesheets for each plugin
import styles from "../calendar.css";
import "@fullcalendar/daygrid/main.css";



function Calendar() {
  const { state } = useContext(Context);
  const [events, setEvents] = useState([
    { title: "",
    start: "",
    color: ""  }
  ]);



useEffect(() => {

    state.map((habit) => {
      const dates = habit.date;
      return dates.length !== 0 ? dates.map((date) => {
          return setEvents((prevEvents) => {
            return [...prevEvents, {
              title: habit.title,
              start: date.isoDate,
              color: habit.color
            }]
          })
        }) : events;
      })



}, []);




    return (
      <div className="cal-box">
        <div className="calendar-styles">
          <FullCalendar
            className={styles}
            defaultView="dayGridMonth"
            header={{
              right: "prev,next today",
             left: "title",

            }}
            plugins={[dayGridPlugin]}
            events={events}
          />
        </div>
      </div>
    );
  }


export default Calendar;
