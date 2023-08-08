import { FC } from "react";
import logo from "../../../assets/logo.avif";
import { useUserAuth } from "../../../context/AuthContext";

import "./Profile.scss";

interface ProfileProps {}

export const Profile: FC<ProfileProps> = () => {
  const { user } = useUserAuth();

  return (
    <div className="profile">
      <img className="profile__logo" src={logo} alt="logo" />
      <h1>Welcome, {user?.displayName}</h1>
      <p>This is your profile for test!</p>
    </div>
  );
};
