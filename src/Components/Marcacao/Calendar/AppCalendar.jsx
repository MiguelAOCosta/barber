import React, { useState } from "react";
import { format, isSameMonth, isSameDay } from "date-fns";
import { pt } from "date-fns/locale";
import { takeMonth } from "./Calendar";
import {
  CalendarContainer,
  Month,
  WeekContainer,
  Week,
  WeekDay,
  Day,
} from "./AppCalendarStyles";

const AppCalendar = ({ selectedDate, setselectedDate }) => {
  const data = takeMonth(selectedDate)();

  function dayColor(day) {
    if (!isSameMonth(day, selectedDate)) return "#999";

    if (isSameDay(day, selectedDate)) {
      return "#974f31";
    } else {
      return "#fff";
    }
  }

  return (
    <CalendarContainer>
      <Month>{format(selectedDate, "dd MMMM yyyy", { locale: pt })}</Month>
      <WeekContainer>
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(
          (dayName, index) => (
            <Week key={index}>{dayName}</Week>
          )
        )}
      </WeekContainer>
      {data.map((week, index) => (
        <WeekDay key={index}>
          {week.map((day, index) => (
            <Day
              key={index}
              onClick={() => setselectedDate(day)}
              style={{
                color: `${dayColor(day)}`,
              }}
            >
              {format(day, "dd")}
            </Day>
          ))}
        </WeekDay>
      ))}
    </CalendarContainer>
  );
};

export default AppCalendar;
