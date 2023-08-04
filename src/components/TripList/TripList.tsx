import { FC } from "react";
import TripCard from "../TripCard";

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
    fromDate: "2023-07-17",
    toDate: "2023-07-23",
  },
  {
    id: 3,
    image: "Barcelona.jpg",
    city: "Barcelona",
    fromDate: "2023-07-16",
    toDate: "2023-07-26",
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
  return (
    <div className="trip-list">
      {staticData &&
        staticData.map((card) => (
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
  );
};
