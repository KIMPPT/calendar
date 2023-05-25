import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./viewcalendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyModal from "./MyModal";
import ReactModal from "react-modal";
import Empty from "./Empty";
export default function ViewCalendar() {
  const mark = ["2023-05-02", "2023-05-07", "2023-05-21"];
  const moment = require("moment");
  const [show, setShow] = useState(false);
  const [switching, setSwitching] = useState(true);
  return (
    <div>
      <p>
        <span onClick={() => setSwitching(false)}>개인용</span>
        <span>/</span>
        <span onClick={() => setSwitching(true)}>단체용</span>
      </p>
      {switching ? (
        <div>
          <Calendar
            //mark에 저장된 년-월-일 과 클릭한 년-월-일 이 일치하냐 안하냐에 따른 이벤트 함수
            onClickDay={(date) =>
              mark.find((x) => x === moment(date).format("YYYY-MM-DD")) ? (
                <ReactModal isOpen={true}>
                  <div>모달 창입니다</div>
                </ReactModal>
              ) : (
                alert("def")
              )
            }
            tileContent={({ date, view }) => {
              if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return (
                  <>
                    <div className="flex justify-center items-center absoluteDiv">
                      <div className="dot"></div>
                      <div className="box"></div>
                      <div className="box1"></div>
                      <div className="box2"></div>
                    </div>
                  </>
                );
              }
            }}
          />
          <Calendar activeStartDate={new Date(2023, 5, 2)} />
        </div>
      ) : (
        <Calendar></Calendar>
      )}
      {
        //오늘에 해당하는 값들을 불러옴.연,월,일,요일,시,분,초,세계표준시기준 전부
        console.log(moment()._d)
      }
      {console.log(moment("2021-01-01", "YYYY-MM-DD"))}
    </div>
  );
}
