import { FC, useState, useEffect } from "react";
import { Days } from "../../api/dto/getCityDto";
import Container from "../Container";
import TripList from "../TripList";
import DayList from "../DayList";
import TodayBlock from "../TodayBlock";
import Modal from "../AddTripModal";
import AppBar from "../AppBar/AppBar";
import { FormData } from "../AddTripModal/AddTripModal";
import { staticDataIn, staticData, cities } from "./staticData";

import "./Home.scss";

interface HomeProps {
  data?: Days;
  isLoading: boolean;
}

export const Home: FC<HomeProps> = ({
  data,
  isLoading,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [trips, setTrips] = useState<staticDataIn[]>(() => {
    const storedTrips = JSON.parse(localStorage.getItem("trips") || "[]");
    return storedTrips.length > 0 ? storedTrips : staticData;
  });

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

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
          <DayList list={data || []} isLoading={isLoading} />
        </div>
        <div className="width-30">
        <TodayBlock/>
        </div>
      </div>
    </Container>
  );
};
