import { FC, useState } from "react";
import TripCard from "../TripCard";
import Search from "../Search";
import AddTripButton from "../AddTripButton";

import "./TripList.scss";

const staticData = [
  {
    id: 1,
    image: "Berlin.jpg",
    city: "Berlin",
    fromDate: "2023-07-14",
    toDate: "2023-07-23",
  },
  {
    id: 2,
    image: "Tokyo.jpg",
    city: "Tokyo",
    fromDate: "2023-08-17",
    toDate: "2023-08-23",
  },
  {
    id: 3,
    image: "Barcelona.jpg",
    city: "Barcelona",
    fromDate: "2023-08-16",
    toDate: "2023-08-26",
  },
  
];

interface TripListProps {
  setSelectedCity: (city: string) => void;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
}

export const TripList: FC<TripListProps> = ({
  setSelectedCity,
  setFromDate,
  setToDate,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = staticData.filter((card) =>
    card.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Search value={searchQuery} onChange={setSearchQuery} />
      <div className="trip-list">
        {searchQuery && filteredData.length === 0 && <p>Nothing found</p>}
        {filteredData.map((card) => (
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
        <AddTripButton/>
      </div>
    </>
  );
};
