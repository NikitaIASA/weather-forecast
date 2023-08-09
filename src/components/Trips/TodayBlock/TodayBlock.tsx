import { FC } from "react";
import { format, parseISO } from 'date-fns';
import Timer from "../../Timer";
import { useTodaysData } from "../../../api/useTodaysData";
import { useWeatherContext } from "../../../context/WeatherContext";
import rain from "../../../assets/rain.png";
import sun from "../../../assets/clear-day.png";
import partlyClouds from "../../../assets/partly-cloudy-day.png";
import clouds from "../../../assets/clouds.png";

import "./TodayBlock.scss";

interface TodayBlockProps {}

export const TodayBlock: FC<TodayBlockProps> = () => {
  const { selectedCity, fromDate} = useWeatherContext(); // Getting our data of selectred trip
  const { data, isError, isLoading } = useTodaysData({selectedCity}); // Fetching data of Today's data

  // Determine the weather image based on the received weather icon
  const weatherImage = data?.icon === "clear-day" ? sun : data?.icon === "rain" ? rain : data?.icon === "partly-cloudy-day" ? partlyClouds : data?.icon === "clouds" ? clouds : "";

  if (isLoading) {
    return <div className="today-block">Loading data...</div>;
  }

  if (isError) {
    return <div className="today-block">Error occurred while fetching data</div>;
  }

  return (
    <aside className="today-block">
      {data ? (
        <>
          <p className="today-block__date">{format(parseISO(data.datetime), 'EEEE')}</p>
          <div className="today-block__weather">
            <img className="today-block__icon" src={weatherImage} alt="rainy" />
            <p className="today-block__temperature">{Math.round(data?.temp)}<sup className="today-block__celcium">°C</sup></p>
          </div>
          <p className="today-block__city">{selectedCity}</p>
          <Timer deadline={fromDate}/>
        </>
      ) : (
        <p className="today-block__choice">Choose your trip</p>
      )}
    </aside>
  );
};
