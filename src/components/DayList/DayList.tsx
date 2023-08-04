import { FC } from "react";
import { Days } from "../../api/dto/getCityDto";
import DayCard from "../DayCard";

import "./DayList.scss";

interface DayListProps {
  list: Days;
}

export const DayList: FC<DayListProps> = ({ list }) => {
  return (
    <div className="day-list">
      {list.map((item, index) => (
        <DayCard key={index} datetime={item.datetime} temp={item.temp} />
      ))}
    </div>
  );
};
