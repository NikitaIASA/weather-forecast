import {FC, useState } from "react";
import Home from "../components/Home";
import { useCityData } from "../api/useCityData";

const WeatherPage: FC = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const { data, isLoading, isError } = useCityData({
    selectedCity,
    fromDate,
    toDate,
  });

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <Home
      data={data}
      selectedCity={selectedCity}
      fromDate={fromDate}
      isLoading={isLoading}
      setSelectedCity={setSelectedCity}
      setFromDate={setFromDate}
      setToDate={setToDate}
    />
  );
};

export default WeatherPage;
