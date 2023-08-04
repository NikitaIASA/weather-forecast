import { FC } from "react";

import "./AddTripButton.scss";

interface AddTripButtonProps {}

export const AddTripButton: FC<AddTripButtonProps> = () => {
  return (
    <div className="add-trip">
      <span className="add-trip__plus">+</span>
      <p className="add-trip__text">Add trip</p>
    </div>
  );
};
