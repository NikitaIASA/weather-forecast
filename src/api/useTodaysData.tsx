import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Today, Day } from "./dto/getTodaysDataDto";

interface getTodaysDataParams {
  selectedCity: string;
}

const getTodaysData = async ({ selectedCity,}: getTodaysDataParams): Promise<Day> => {
  const { data } = await axios.get<Today>(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedCity}/today?unitGroup=metric&include=days&key=EL8RTZAZFF8422YZLCE6NG8YJ&contentType=json`
  );

  return data.days[0];
};

export const useTodaysData = ({
  selectedCity,
}: getTodaysDataParams) => {
  const { data, isLoading, isError, refetch } = useQuery(
    "getTodaysData",
    () => getTodaysData({ selectedCity }),
    { enabled: false }
  );

  useEffect(() => {
    if ( selectedCity ) {
      refetch();
    }
  }, [selectedCity]);

  return { data, isLoading, isError };
};