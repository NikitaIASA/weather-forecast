import { FC } from "react";
import { useTodaysData } from "../../api/useTodaysData";
import { useWeatherContext } from "../../context/WeatherContext";

import rain from "../../assets/rain.png";
import sun from "../../assets/clear-day.png";
import partlyClouds from "../../assets/partly-cloudy-day.png";
import clouds from "../../assets/clouds.png";

import "./TodayBlock.scss";
import Timer from "../Timer";

interface TodayBlockProps {}

export const TodayBlock: FC<TodayBlockProps> = () => {
  const { selectedCity, fromDate} = useWeatherContext(); 

  const { data, isError, isLoading } = useTodaysData({selectedCity});

  const weatherImage = data?.icon === "clear-day" ? sun : data?.icon === "rain" ? rain : data?.icon === "partly-cloudy-day" ? partlyClouds : data?.icon === "clouds" ? clouds : "";

  if (isLoading) {
    return <div className="today-block">Loading data...</div>;
  }

  if (isError) {
    return <div className="today-block">Error occurred while fetching data</div>;
  }

  return (
    <aside className="today-block">
      {data && (
        <>
          <p className="today-block__date">{data?.datetime}</p>
          <div className="today-block__weather">
            <img className="today-block__icon" src={weatherImage} alt="rainy" />
            <p className="today-block__temperature">{Math.round(data?.temp)}<sup className="today-block__celcium">°C</sup></p>
          </div>
          <p className="today-block__city">{selectedCity}</p>
          <Timer deadline={fromDate}/>
        </>
      )}
    </aside>
  );
};
