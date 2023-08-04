import { FC } from "react";
// import Home from "./components/Home";
import WeatherPage from "./pages/Home";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return <WeatherPage />;
};
