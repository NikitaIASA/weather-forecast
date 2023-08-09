import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Today, Day } from "./dto/getTodaysDataDto";

interface getTodaysDataParams {
  selectedCity: string;
}

// Function to fetch today's weather data for a selected city
const getTodaysData = async ({ selectedCity,}: getTodaysDataParams): Promise<Day> => {
  const { data } = await axios.get<Today>(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=days&key=${import.meta.env.VITE_VERCEL_API_KEY}&contentType=json`
  );

  return data.days[0];
};

// Custom hook to use today's weather data
export const useTodaysData = ({
  selectedCity,
}: getTodaysDataParams) => {
  const { data, isLoading, isError, refetch } = useQuery(
    "getTodaysData",
    () => getTodaysData({ selectedCity }),
    { enabled: false }
  );

  // Triggering refetch when selectedCity changes
  useEffect(() => {
    if ( selectedCity ) {
      refetch();
    }
  }, [selectedCity]);

  return { data, isLoading, isError };
};
