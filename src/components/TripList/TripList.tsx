import { FC } from "react";
import TripCard from "../TripCard";
import Search from "../Search";
import AddTripButton from "../AddTripButton";
import { staticDataIn } from "../Home/Home";

import "./TripList.scss";

interface TripListProps {
  trips: staticDataIn[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsModalOpen: (modal: boolean) => void;
  setSelectedCity: (city: string) => void;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
}

export const TripList: FC<TripListProps> = ({
  trips,
  searchQuery,
  setSearchQuery,
  setIsModalOpen,
  setSelectedCity,
  setFromDate,
  setToDate,
}) => {

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <div className="trip-list">
        {searchQuery && trips.length === 0 && <p>Nothing found</p>}
        {trips.map((card) => (
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
        <AddTripButton onAddTripButtonClick={() => setIsModalOpen(true)}/>
      </div>
    </>
  );
};
