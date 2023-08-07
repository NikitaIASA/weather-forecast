import {FC, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from '../../context/AuthContext';
import logo from "../../assets/logo.avif";

import "./SignIn.scss";

export const SignIn: FC = () => {
  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="signIn">
      <img className="signIn__logo" src={logo} alt="logo" />
      <h1 className="signIn__title">
        Sign in with your Google account
      </h1>
    </div>
  );
};

