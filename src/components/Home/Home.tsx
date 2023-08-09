import { FC, useState, useEffect } from "react";
import { Days } from "../../api/dto/getCityDto";
import Container from "../UI/Container";
import TripList from "../Trips/TripList";
import DayList from "../Days/DayList";
import TodayBlock from "../Trips/TodayBlock";
import Modal from "../Trips/AddTripModal";
import AppBar from "../AppBar/AppBar";
import { FormData } from "../Trips/AddTripModal/AddTripModal";
import { staticDataIn, staticData, cities } from "./staticData";

import "./Home.scss";

interface HomeProps {
  data?: Days;
  isLoading: boolean;
  isError: boolean;
}

export const Home: FC<HomeProps> = ({
  data,
  isLoading,
  isError
}) => {
  // State for search query, modal state, and trips data
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State for storing trip data in localStorage
  const [trips, setTrips] = useState<staticDataIn[]>(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips") || "[]");
    return storedTrips.length > 0 ? storedTrips : staticData;
  });

  // Save trips data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  // Function to handle saving new trip data
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

  // Update body class when modal is open or closed
  useEffect(() => {
    isModalOpen && document.body.classList.add("modal-open");
    !isModalOpen && document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  // Filter trips based on search query
  const filteredData =
    trips &&
    trips.filter((item) =>
      item.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Container>
      <div className="flex">
        <div className="width-70">
        <AppBar />
          <TripList
            trips={filteredData || []}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setIsModalOpen={setIsModalOpen}
          />
          {isModalOpen && (
            <Modal
              cities={cities}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          )}
          <DayList list={data || []} isLoading={isLoading} isError={isError} />
        </div>
        <div className="width-30">
        <TodayBlock/>
        </div>
      </div>
    </Container>
  );
};
