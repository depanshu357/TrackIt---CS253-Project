import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from 'react-calendar'
import './calendarYear.css';


const CalendarYear = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date =>{
    setDate(date)
  }

  return (
  <div>
    <Calendar onChange={onChange} value={date} maxDetail='year' minDetail="year" defaultView="year" />  </div>);
};

render(
<CalendarYear />, document.querySelector("#root")

);

export default CalendarYear;

