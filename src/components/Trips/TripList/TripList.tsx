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

// Function for scrolling horizontally
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
  const contentWrapper = useRef<HTMLDivElement | null>(null); // Wrapper for horizontal scrool
  const { selectedCity, setSelectedCity, setFromDate, setToDate } = useWeatherContext(); // Getting our data of selectred trip
  const sortedTrips = trips && trips
    .slice()
    .sort((a, b) => a.fromDate.localeCompare(b.fromDate)); // Sort trips by start trip date

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <div className="trip-list">
        <div className="trip-list__row">
          <div className="trip-list__trips" ref={contentWrapper}>
            {searchQuery && trips.length === 0 && <p className="trip-list__nothing-found">Nothing found</p>}
            {sortedTrips && sortedTrips.map((card) => (
              <TripCard
                key={card.id}
                selectedCity={selectedCity}
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
        {sortedTrips && sortedTrips.length > 3 && (
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
        )}
      </div>
    </>
  );
};
