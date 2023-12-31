import { FC } from "react";

import "./TripCard.scss";

export interface TripCardProps {
  image: string;
  city: string;
  fromDate: string;
  toDate: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TripCard: FC<TripCardProps> = ({
  image,
  city,
  fromDate,
  toDate,
  isSelected,
  onClick,
}) => {

  return (
    <div className={`trip-card ${isSelected ? "active" : ""}`} onClick={onClick}>
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
