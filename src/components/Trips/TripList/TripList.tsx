import { FC } from "react";
import TripCard from "../TripCard";
import Search from "../../UI/Search";
import AddTripButton from "../../UI/AddTripButton";
import { useWeatherContext } from "../../../context/WeatherContext";
import { staticDataIn } from "../../Home/staticData";

import "./TripList.scss";

interface TripListProps {
  trips: staticDataIn[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsModalOpen: (modal: boolean) => void;
}

export const TripList: FC<TripListProps> = ({
  trips,
  searchQuery,
  setSearchQuery,
  setIsModalOpen,
}) => {

  const {
    setSelectedCity,
    setFromDate,
    setToDate,
  } = useWeatherContext(); 
  const sortedTrips = trips.slice().sort((a, b) => a.fromDate.localeCompare(b.fromDate));
  
  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <div className="trip-list">
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
        <AddTripButton onAddTripButtonClick={() => setIsModalOpen(true)} />
      </div>
    </>
  );
};
