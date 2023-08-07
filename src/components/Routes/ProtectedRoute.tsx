import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
    /* eslint-disable */
    component: any;
    redirectTo: string;
  }

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, redirectTo = "/" }) => {
  const { user } = useUserAuth();
  return user ? <Navigate to={redirectTo} /> : Component;
};
