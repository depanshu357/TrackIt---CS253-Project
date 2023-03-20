import React, { useState } from "react";
import "./calendar.css"
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
// import CalendarMonthView from 'react-calendar-month-view';


const Calendarm = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  // console.log(typeof selectedDay.day);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends

    />
  );
};


export default Calendarm;