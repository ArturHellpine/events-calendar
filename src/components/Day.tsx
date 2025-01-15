import { FC } from 'react';
import { format, isToday } from "date-fns";
import TaskList from "./TaskList";
import HolidayComponent from "./HolidayComponent";
import styled from "@emotion/styled";

type DayProps = {
    index: number
    day: Date
    holidays: string[]
}

const Day: FC<DayProps> = ({ day, index, holidays }) => {
    return (
        <>
            <Cell key={index}>
                <div className={`${isToday(day) && 'today'}`}>{format(day, 'd')}</div>
                <TaskList />
                {holidays.map((holiday, index) => {
                    return (
                        <HolidayComponent key={index} day={day} holiday={holiday}  />
                    )
                })}
            </Cell>
        </>
    );
};

export default Day;

const Cell = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

