import { FC, useRef } from "react";
import TripCard from "../TripCard";
import Search from "../../UI/Search";
import AddTripButton from "../../UI/AddTripButton";
import nextArrow from "../../../assets/next-arrow.png";
import backArrow from "../../../assets/back-arrow.png";
import { useWeatherContext } from "../../../context/WeatherContext";
import { staticDataIn } from "../../Home/staticData";

import "./TripList.scss";

interface TripListProps {
  trips: staticDataIn[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsModalOpen: (modal: boolean) => void;
}

const sideScroll = (
  element: HTMLDivElement,
  speed: number,
  distance: number,
  step: number
) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export const TripList: FC<TripListProps> = ({
  trips,
  searchQuery,
  setSearchQuery,
  setIsModalOpen,
}) => {
  const contentWrapper = useRef<HTMLDivElement | null>(null);
  const { setSelectedCity, setFromDate, setToDate } = useWeatherContext();
  const sortedTrips = trips
    .slice()
    .sort((a, b) => a.fromDate.localeCompare(b.fromDate));

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <div className="trip-list">
        <div className="trip-list__row">
          <div className="trip-list__trips" ref={contentWrapper}>
            {searchQuery && trips.length === 0 && <p>Nothing found</p>}
            {sortedTrips.map((card) => (
              <TripCard
                key={card.id}
                {...card}
                onClick={() => {
                  setSelectedCity(card.city);
                  setFromDate(card.fromDate);
                  setToDate(card.toDate);
                }}
              />
            ))}
          </div>
          <AddTripButton onAddTripButtonClick={() => setIsModalOpen(true)} />
        </div>
        <div className="trip-list__buttons">
          <img
            src={backArrow}
            alt="back arrow"
            onClick={() => {
              sideScroll(contentWrapper.current!, 20, 235, -10);
            }}
          ></img>
          <img
            src={nextArrow}
            alt="next arrow"
            onClick={() => {
              sideScroll(contentWrapper.current!, 20, 235, 10);
            }}
          ></img>
        </div>
      </div>
    </>
  );
};
