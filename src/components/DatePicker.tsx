import { FC } from 'react';
import { months, years } from "../utils/utils";
import styled from "@emotion/styled";

type DatePickerProps = {
    currentDate: Date
    changeMonthSelector: (event) => void
    changeYearSelector: (event) => void
}

const DatePicker: FC<DatePickerProps> = ({ currentDate, changeMonthSelector, changeYearSelector }) => {
    return (
        <Selectors>
            <Select value={currentDate.getMonth()} onChange={changeMonthSelector}>
                {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                ))}
            </Select>
            <Select value={currentDate.getFullYear()} onChange={changeYearSelector}>
                {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </Select>
        </Selectors>
    );
};

export default DatePicker;

const Selectors = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 30px;
`

const Select = styled.select`
  background: transparent;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 4px;
  margin: 2px;
  cursor: pointer;
  font-size: 14px;
`
