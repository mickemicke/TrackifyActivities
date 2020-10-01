import React from "react";
import dayjs from "dayjs";
import MonthWrapper from "./MonthWrapper";
import Week, { WeekWrapper, normalWeek } from "../Week";
import Day from "../Day";

function Month({
  daysInMonth,
  // startOfMonth,
  // endOfMonth,
  weeks,
  month,
}) {
  // console.log("weeks", weeks);
  return (
    <MonthWrapper>
      {dayjs().month(month).format("MMMM")}
      <WeekWrapper>
        {normalWeek.map((day) => (
          <Day
            active={true}
            day={{ date: null, weekday: dayjs().weekday(day).format("dddd") }}
            displayWeekday={true}
          />
        ))}
      </WeekWrapper>
      {weeks.map((week) => (
        <Week week={week} />
      ))}
    </MonthWrapper>
  );
}

export default Month;
