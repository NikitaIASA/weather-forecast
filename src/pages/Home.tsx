import { FC } from "react";
import Home from "../components/Home";
import { useCityData } from "../api/useCityData";
import { useWeatherContext } from "../context/WeatherContext";

const WeatherPage: FC = () => {
  const { selectedCity, fromDate, toDate } = useWeatherContext(); // Getting data from context about selectred trip

  const { data, isLoading, isError } = useCityData({ // Fetching data 
    selectedCity,
    fromDate,
    toDate,
  });

  return <Home data={data} isLoading={isLoading} isError={isError} />;
};

export default WeatherPage;
