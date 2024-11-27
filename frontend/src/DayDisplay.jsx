import React, { useState } from "react";
import usePrevious from "./usePrevious";

const DayDisplay = () => {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);

  const WORK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const getNextDay = () => {
    const currentIndex = WORK_DAYS.indexOf(day);
    const nextIndex = (currentIndex + 1) % WORK_DAYS.length;
    setDay(WORK_DAYS[nextIndex]);
 };

  return (
    <div>
      <h1>
        Today is: {day}
        <br />
        {prevDay && <span>Previous work day was: {prevDay}</span>}
      </h1>
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}

export default React.memo(DayDisplay);