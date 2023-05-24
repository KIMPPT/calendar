import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './viewcalendar.css'
export default function ViewCalendar() {
  const mark = ["2023-05-02", "2023-05-07", "2023-05-21"];
  const moment = require("moment");
  return (
    <div>
      <Calendar
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot"></div>
                </div>
              </>
            );
          }
        }}
      />
      <Calendar activeStartDate={new Date(2023, 5, 2)} />
      {
        //오늘에 해당하는 값들을 불러옴.연,월,일,요일,시,분,초,세계표준시기준 전부
        console.log(moment()._d)
      }
      {console.log(moment("2021-01-01", "YYYY-MM-DD"))}
    </div>
  );
}
