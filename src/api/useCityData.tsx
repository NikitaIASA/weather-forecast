import axios from "axios";
import { useEffect } from 'react';
import { useQuery } from "react-query";
import { City, Days } from "./dto/getCityDto";

interface GetCityParams {
  selectedCity: string;
  fromDate: string;
  toDate: string;
}

// Function to fetch weather data for a selected city within a date range
const getCity = async ({ selectedCity, fromDate, toDate }: GetCityParams): Promise<Days> => {
  const { data } = await axios.get<City>(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/${fromDate}/${toDate}?unitGroup=metric&include=days&key=${import.meta.env.VITE_VERCEL_API_KEY}&contentType=json`
  );

  return data.days; // Returning the "days" property from the fetched data
};

// Custom hook to use weather data
export const useCityData = ({ selectedCity, fromDate, toDate }: GetCityParams) => {
  const { data, isLoading, isError, refetch} = useQuery(
    "getCity",
    () => getCity({ selectedCity, fromDate, toDate }),
    { enabled: false }
  );
  
  // Triggering refetch when selectedCity, fromDate, or toDate change
  useEffect(() => {
    if (selectedCity && fromDate && toDate) {
      refetch();
    }
  }, [selectedCity, fromDate, toDate ]);

  return { data, isLoading, isError };
};
