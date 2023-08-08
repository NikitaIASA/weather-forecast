import { FC } from "react";
import { FaSearch } from "react-icons/fa";

import "./Search.scss";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className="trip-search">
      <FaSearch className="trip-search__icon" />
      <input
        className="trip-search__input"
        type="text"
        placeholder="Search your trip"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
