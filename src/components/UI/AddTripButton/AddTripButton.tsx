import { FC } from "react";

import "./AddTripButton.scss";

interface AddTripButtonProps {
  onAddTripButtonClick: () => void;
}

export const AddTripButton: FC<AddTripButtonProps> = ({
  onAddTripButtonClick,
}) => {
  return (
    <div className="add-trip" onClick={onAddTripButtonClick}>
      <span className="add-trip__plus">+</span>
      <p className="add-trip__text">Add trip</p>
    </div>
  );
};
