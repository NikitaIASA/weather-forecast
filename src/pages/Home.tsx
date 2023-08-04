import React, { useState } from "react";
import Home from "../components/Home";
import { useCityData } from "../api/useCityData";

const WeatherPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const { data, isError } = useCityData({
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
      setSelectedCity={setSelectedCity}
      setFromDate={setFromDate}
      setToDate={setToDate}
    />
  );
};

export default WeatherPage;
