import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
export default function ViewCalendar() {
  return (
    <div>
      <Calendar />
      <Calendar activeStartDate={new Date(2023,5,2)}/>
    </div>
  );
}
