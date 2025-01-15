import { FC } from 'react';
import { format}  from "date-fns";
import styled from "@emotion/styled";

type HolidayProps = {
    day: Date
    holiday: string
}

const HolidayComponent: FC<HolidayProps> = ({ day, holiday }) => {
    const formatHoliday = holiday.localName.length > 14 ? holiday.localName.slice(0, 14) + '...' : holiday.localName

    return (
        <>
            <Holiday key={holiday.localName}>
                {format(holiday.date, 'd') === format(day, 'd') && formatHoliday}
            </Holiday>
        </>
    );
};

export default HolidayComponent;

const Holiday = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  background: #f6d79a;
  align-items: center;
`
