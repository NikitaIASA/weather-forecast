import React, { useState } from "react";
import Home from "../components/Home";
import { useCityData } from "../api/useCityData";

const WeatherPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [fromDate, setFromDate] = useState("2022-07-14");
  const [toDate, setToDate] = useState("2022-07-21");

  const { data, isError } = useCityData({
    selectedCity,
    fromDate,
    toDate,
  });

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <>
      <Home
        data={data}
        setSelectedCity={setSelectedCity}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
    </>
  );
};

export default WeatherPage;
