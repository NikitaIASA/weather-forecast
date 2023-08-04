import { FC } from "react";
import { Days } from "../../api/dto/getCityDto";
import DayCard from "../DayCard";

import "./DayList.scss";

interface DayListProps {
  list: Days;
}

export const DayList: FC<DayListProps> = ({ list }) => {
  return (
    <>
      {list.length > 0 && <h2 className="day-list__dates">Dates</h2>}
      <div className="day-list">
        {list.map((item, index) => (
          <DayCard key={index} datetime={item.datetime} temp={item.temp} />
        ))}
      </div>
    </>
  );
};
