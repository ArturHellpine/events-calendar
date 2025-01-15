import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { format } from "date-fns";
import { FC } from "react";
import DatePicker from "./DatePicker";
import styled from "@emotion/styled";

type HeaderComponentProps = {
    currentDate: Date
    setCurrentDate: (newDate: Date) => void
}

const HeaderComponent: FC<HeaderComponentProps> = ({ currentDate, setCurrentDate }) => {

    const changeMonth = (offset) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
        setCurrentDate(newDate);
    }

    const changeMonthSelector = (e) => {
        const newMonth = parseInt(e.target.value, 10);
        const newDate = new Date(currentDate.getFullYear(), newMonth, 1);
        setCurrentDate(newDate);
    };

    const changeYearSelector = (e) => {
        const newYear = parseInt(e.target.value, 10);
        const newDate = new Date(newYear, currentDate.getMonth(), 1);
        setCurrentDate(newDate);
    };

    return (
        <Header>
            <DatePicker
                currentDate={currentDate}
                changeMonthSelector={changeMonthSelector}
                changeYearSelector={changeYearSelector}
            />
            <MonthSelector>
                <Button onClick={() => changeMonth(-1)}>
                    <AiOutlineArrowLeft size={20} />
                </Button>
                <CurrentMonth>{format(currentDate, 'MMMM yyyy')}</CurrentMonth>
                <Button onClick={() => changeMonth(+1)}>
                    <AiOutlineArrowRight size={20}/>
                </Button>
            </MonthSelector>
        </Header>
    );
};

export default HeaderComponent;

const Header = styled.div`
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`

const MonthSelector = styled.div`
  display: flex;
  align-items: center;
`

const CurrentMonth = styled.h2`
  text-align: center;
`

const Button = styled.button`
  background: transparent;
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 4px;
  margin: 0 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
`
