import moment from "../moment";
import range from "lodash/range";

const numberOfMonths = range(0, 12);

/**
 * Creates weeks of days based on the starting day of a given month
 * @param {int} startOfMonth
 * @param {int} totalDays
 * @param {array} weeks
 */
function createWeeks(startOfMonth, totalDays, weeks = [], daysCounter = 0) {
  if (totalDays <= 0) {
    return weeks;
  }
  // first week
  if (weeks.length === 0) {
    const firstWeek = 7 - startOfMonth;
    const newDays = totalDays - firstWeek;
    const newWeek = range(startOfMonth, 7).map((day, i) => ({
      weekday: day,
      date: i + 1, // dont want dates to be 0-indexed
    }));
    const newDaysCounter = newWeek.length;
    return createWeeks(
      startOfMonth,
      newDays,
      [...weeks, newWeek],
      newDaysCounter
    );
  }
  if (totalDays > 7) {
    const newDays = totalDays - 7;
    const newWeek = range(0, 7).map((day, i) => ({
      weekday: day,
      date: daysCounter + i + 1, // dont want dates to be 0-indexed
    }));
    const newDaysCounter = newWeek.length + daysCounter;
    return createWeeks(
      startOfMonth,
      newDays,
      [...weeks, newWeek],
      newDaysCounter
    );
  }
  // last week
  const newDays = totalDays - 7;
  const newWeek = range(0, totalDays).map((day, i) => ({
    weekday: day,
    date: daysCounter + i + 1, // dont want dates to be 0-indexed
  }));
  const newDaysCounter = newWeek.length + daysCounter;
  return createWeeks(
    startOfMonth,
    newDays,
    [...weeks, newWeek],
    newDaysCounter
  );
}

/**
 * Returns a year worth of months with weeks
 * @param {String} year
 */
function createDates(year = moment().year().toString()) {
  return numberOfMonths.reduce((acc, m) => {
    // const month = moment(year).month(m);
    const daysInMonth = moment(year).month(m).daysInMonth();
    const startOfMonth = moment(year).month(m).weekday();
    const endOfMonth = moment(year).month(m).endOf("month").weekday();
    const weeks = createWeeks(startOfMonth, daysInMonth, []);
    // console.log("weeks", weeks);
    return [
      ...acc,
      {
        month: m,
        weeks,
        daysInMonth,
      },
    ];
  }, []);
}

export default createDates;
