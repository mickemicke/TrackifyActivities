import React from "react";
import moment from "../../moment";
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
      {moment().month(month).format("MMMM")}
      <WeekWrapper>
        {normalWeek.map((day) => (
          <Day
            active={true}
            day={{ date: null, weekday: moment().weekday(day).format("dddd") }}
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
