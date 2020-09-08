import React from "react";
import styled from "styled-components";
import Day from "./Day";

export const normalWeek = [0, 1, 2, 3, 4, 5, 6];

export const WeekWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

function Week({ week }) {
  // console.log("week props", week);
  return (
    <WeekWrapper>
      {normalWeek.map((day) => (
        <Day
          active={
            week.findIndex((w) => w.weekday === day) === -1 ? false : true
          }
          day={week.find((w) => w.weekday === day)}
        />
      ))}
    </WeekWrapper>
  );
}

export default Week;
