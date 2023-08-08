import { FC } from "react";
import { Days } from "../../../api/dto/getCityDto";
import DayCard from "../DayCard";

import "./DayList.scss";

interface DayListProps {
  list: Days;
  isLoading: boolean;
  isError: boolean;
}

export const DayList: FC<DayListProps> = ({ list, isLoading, isError }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error with fetching your data</p>;
  }

  return (
    <>
      {list.length > 0 && <h2 className="day-list__dates">Dates</h2>}
      <div className="day-list">
        {list.map((item, index) => (
          <DayCard
            key={index}
            conditions={item.conditions}
            maxTemperature={item.tempmax}
            minTemperature={item.tempmin}
            date={item.datetime}
            icon={item.icon}
          />
        ))}
      </div>
    </>
  );
};
