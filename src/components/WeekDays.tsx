import { weekDays } from "../utils/utils";
import styled from "@emotion/styled";

const WeekDays = () => {
    return (
        <>
            {weekDays.map((day) => {
                return <WeekDay key={day}>{day}</WeekDay>
            })}
        </>
    );
};

export default WeekDays;

const WeekDay = styled.div`
  border: none;
  font-weight: 700;
  text-align: center;
  opacity: 0.7;
  background: #838181;
  padding: 10px 0;
  border-radius: 5px;
  color: #fff;
`
