import { FC } from "react";
import { Days } from "../../api/dto/getCityDto";
import Container from "../Container";
import TripList from "../TripList";
import DayList from "../DayList";
import TodayBlock from "../TodayBlock";

import "./Home.scss";

interface HomeProps {
  data?: Days;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
}

export const Home: FC<HomeProps> = ({
  data,
  selectedCity,
  setSelectedCity,
  setFromDate,
  setToDate,
}) => {
  return (
    <Container>
      <div className="flex">
        <div className="width-75">
          <h1 className="title">
            Weather <span className="title__bold">ForeCast</span>
          </h1>
          <TripList
            setSelectedCity={setSelectedCity}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
          <DayList list={data || []} />
        </div>
        <div className="width-25">
          <TodayBlock selectedCity={selectedCity}/>
        </div>
      </div>
    </Container>
  );
};
