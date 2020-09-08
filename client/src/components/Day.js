import React from "react";
import styled from "styled-components";

const DayDiv = styled.div`
  width: 14%;
  height: 50px;
  display: flex;
  background-color: ${(props) => (props.active ? "white" : "grey")};
  color: ${(props) => (props.active ? "black" : "white")};
  justify-content: center;
  align-items: center;
`;

function Day({ active, displayWeekday, day: { weekday, date } = {} }) {
  // console.log("active", active);
  // console.log("weekday", weekday);
  // console.log("date", date);
  if (!active) {
    return <DayDiv active={active}></DayDiv>;
  }
  if (displayWeekday) {
    return <DayDiv active={active}>{weekday}</DayDiv>;
  }
  return <DayDiv active={active}>{date}</DayDiv>;
}

export default Day;
