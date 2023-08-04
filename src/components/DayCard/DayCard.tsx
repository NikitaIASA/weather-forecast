import { FC } from "react";
import sun from "../../assets/clear-day.jpg";
import rain from "../../assets/rain.jpg";
import clouds from "../../assets/partly-cloudy-day.jpg";

import "./DayCard.scss";

interface DayCardProps {
  icon: string;
  conditions: string;
  maxTemperature: number;
  minTemperature: number;
  date: string;
}

export const DayCard: FC<DayCardProps> = ({
  date,
  icon,
  conditions,
  maxTemperature,
  minTemperature,
}) => {
  const weatherImage =
    icon === "clear-day" ? sun : icon === "rain" ? rain : clouds;

  return (
    <div className="day-card">
      <p className="day-card__date">{date}</p>
      <img className="day-card__image" src={weatherImage} alt={conditions} />
      <p className="day-card__temperature">{`${Math.round(minTemperature)}° / ${Math.round(maxTemperature)}°`}</p>
    </div>
  );
};
