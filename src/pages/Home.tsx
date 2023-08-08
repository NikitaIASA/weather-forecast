import { FC } from "react";
import Home from "../components/Home";
import { useCityData } from "../api/useCityData";
import { useWeatherContext } from "../context/WeatherContext";

const WeatherPage: FC = () => {
  const { selectedCity, fromDate, toDate } = useWeatherContext();

  const { data, isLoading, isError } = useCityData({
    selectedCity,
    fromDate,
    toDate,
  });

  // if (isError) {
  //   return <div>Error occurred while fetching data</div>;
  // }

  return <Home data={data} isLoading={isLoading} isError={isError} />;
};

export default WeatherPage;
