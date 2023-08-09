import { FC } from "react";

import "./TripCard.scss";

export interface TripCardProps {
  image: string;
  city: string;
  fromDate: string;
  toDate: string;
  selectedCity: string | null;
  onClick: () => void;
}

export const TripCard: FC<TripCardProps> = ({
  image,
  city,
  fromDate,
  toDate,
  selectedCity,
  onClick,
}) => {
  const isActive = selectedCity === city;

  return (
    <div className={`trip-card ${isActive ? "active" : ""}`}  onClick={onClick}>
      <img className="trip-card__image" src={image} alt="city image" />
      <div className="trip-card__description">
        <p className="trip-card__city">{city}</p>
        <p className="trip-card__date">
          {fromDate} - {toDate}
        </p>
      </div>
    </div>
  );
};
