import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
    /* eslint-disable */
    component: any;
    redirectTo: string;
  }

export const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, redirectTo = "/" }) => {
  const { user } = useUserAuth();
  const isNotAuthenticated = !user;
  return isNotAuthenticated ? <Navigate to={redirectTo} /> : Component;
};
