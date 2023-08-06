import { FC, useState, useEffect } from "react";
import { Days } from "../../api/dto/getCityDto";
import Container from "../Container";
import TripList from "../TripList";
import DayList from "../DayList";
import TodayBlock from "../TodayBlock";
import Modal from "../AddTripModal";
import { FormData } from "../AddTripModal/AddTripModal";

import "./Home.scss";

export interface staticDataIn {
  id: number;
  image: string;
  city: string;
  fromDate: string;
  toDate: string;
}

const staticData: staticDataIn[] = [
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

const cities = ["Mariupol", "Madrid", "Venezia"];

interface HomeProps {
  data?: Days;
  selectedCity: string;
  fromDate: string;
  isLoading: boolean;
  setSelectedCity: (city: string) => void;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
}

export const Home: FC<HomeProps> = ({
  data,
  selectedCity,
  isLoading,
  setSelectedCity,
  fromDate,
  setFromDate,
  setToDate,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [trips, setTrips] = useState<staticDataIn[]>([...staticData]);

  const handleSave = (formData: FormData) => {
    const newTrip = {
      id: trips.length + 1,
      image: `${formData.city}.jpg`,
      city: formData.city,
      fromDate: formData.startDate,
      toDate: formData.endDate,
    };
    
    setTrips([...trips, newTrip]);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    isModalOpen && document.body.classList.add("modal-open");
    !isModalOpen && document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  const filteredData = trips && trips.filter((item) =>
    item.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <div className="flex">
        <div className="width-70">
          <h1 className="title">
            Weather <span className="title__bold">ForeCast</span>
          </h1>
          <TripList
            trips={filteredData || []}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsModalOpen={setIsModalOpen}
            setSelectedCity={setSelectedCity}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
          {isModalOpen && (
            <Modal
              cities={cities}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
          <DayList list={data || []} isLoading={isLoading} />
        </div>
        <div className="width-30">
          <TodayBlock selectedCity={selectedCity} fromDate={fromDate} />
        </div>
      </div>
    </Container>
  );
};
