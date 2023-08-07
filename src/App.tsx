import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute";
import Layout from "./components/Layout";
import WeatherPage from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/" element={<Layout />}>
        <Route
          path="/signin"
          element={
            <ProtectedRoute redirectTo="/profile" component={<SignIn />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/signin" component={<Profile />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
