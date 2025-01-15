import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from "date-fns";
import { FC, useState } from "react";
import Days from "./Days";
import HeaderComponent from "./HeaderComponent";
import styled from "@emotion/styled";
import '../app.css'

const EventCalendar: FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const firstDayOfMonth = startOfMonth(currentDate)
    const lastDayOfMonth = endOfMonth(currentDate)

    const daysInMonth = eachDayOfInterval({
        start: firstDayOfMonth,
        end: lastDayOfMonth
    })

    const startingDayIndex = getDay(firstDayOfMonth)

    return (
        <CalendarContainer>
            <HeaderComponent currentDate={currentDate} setCurrentDate={setCurrentDate} />
            <Days startingDayIndex={startingDayIndex} daysInMonth={daysInMonth} />
        </CalendarContainer>
    );
};

export default EventCalendar;

const CalendarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

