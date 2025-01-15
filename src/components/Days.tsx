import styled from "@emotion/styled";
import useGetHolidays from "../hooks/useGetHolidays";
import WeekDays from "./WeekDays";
import EmptyDays from "./EmptyDays";
import Day from "./Day";

const Days = ({ daysInMonth, startingDayIndex }) => {
    const { holidays, setHolidays } = useGetHolidays()

    return (
        <Grid>
            <WeekDays />
            <EmptyDays startingDayIndex={startingDayIndex} />
            {daysInMonth.map((day, index) => {
                return (
                    <Day key={day} day={day} index={index} holidays={holidays} />
                )
            })}
        </Grid>
    );
};

export default Days;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin: 20px auto;
`;

