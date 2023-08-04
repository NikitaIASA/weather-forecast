import { FC } from "react";
import { Days } from "../../api/dto/getCityDto";
import DayCard from "../DayCard";

import "./DayList.scss";

interface DayListProps {
  list: Days;
  isLoading: boolean;
}

export const DayList: FC<DayListProps> = ({ list, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </>
  );
};
