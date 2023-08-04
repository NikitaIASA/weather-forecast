import { FC } from "react";
import { Days } from "../../api/dto/getCityDto";
import Container from "../Container";
import TripList from "../TripList";
import DayList from "../DayList";

import "./Home.scss";

interface HomeProps {
  data?: Days;
  setSelectedCity: (city: string) => void;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
}

export const Home: FC<HomeProps> = ({
  data,
  setSelectedCity,
  setFromDate,
  setToDate,
}) => {
  return (
    <Container>
      <h1 className="title">
        Weather <span className="title__bold">ForeCast</span>
      </h1>
      <TripList
        setSelectedCity={setSelectedCity}
        setFromDate={setFromDate}
        setToDate={setToDate}
      />
      <p className="days">Days</p>
      <DayList list={data || []}/>
    </Container>
  );
};
