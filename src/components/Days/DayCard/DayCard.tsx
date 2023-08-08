import { FC } from "react";
import sun from "../../../assets/clear-day.png";
import rain from "../../../assets/rain.png";
import partlyClouds from "../../../assets/partly-cloudy-day.png";
import clouds from "../../../assets/clouds.png";

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
  const weatherImage = icon === "clear-day" ? sun : icon === "rain" ? rain : icon === "clouds" ? clouds : partlyClouds;

  return (
    <div className="day-card">
      <p className="day-card__date">{date}</p>
      <img className="day-card__image" src={weatherImage} alt={conditions} />
      <p className="day-card__temperature">{`${Math.round(minTemperature)}° / ${Math.round(maxTemperature)}°`}</p>
    </div>
  );
};
