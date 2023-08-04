import { FC } from 'react';
import sun from '../../assets/sun.jpg';

import "./DayCard.scss";

interface DayCardProps {
    datetime: string;
    temp: number;
}

export const DayCard: FC<DayCardProps> = ({datetime, temp}) => {
  return (
    <div className="day-card">
        <p className="day-card__date">{datetime}</p>
        <img className="day-card__image" src={sun} alt="sunny day" />
        <p className="day-card__temperature">{temp}</p>
    </div>
  );
};
