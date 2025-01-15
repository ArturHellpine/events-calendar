import { FC } from 'react';
import styled from "@emotion/styled";

type EmptyDaysProps = {
    startingDayIndex: number
}

const EmptyDays: FC<EmptyDaysProps> = ({ startingDayIndex }) => {
    return (
        <>
            {Array.from({length: startingDayIndex}).map((_, index) => {
                return <Cell key={`empty-${index}`} />
            })}
        </>
    );
};

export default EmptyDays;

const Cell = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;
