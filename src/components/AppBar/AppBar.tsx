import { FC } from "react";
import { useSnackbar } from "notistack";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../context/AuthContext";

import "./AppBar.scss";

const AppBar: FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { user, logOut, googleSignIn } = useUserAuth();

  const handleSignOut = async () => {
    try {
      alert("Are you sure that you want to logout?");
      await logOut();
      enqueueSnackbar("You are logged out", { variant: "success" });
    } catch (error) {
      enqueueSnackbar("Logout error", { variant: "error" });
    }
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      enqueueSnackbar("Login error", { variant: "error" });
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">
          Weather <span className="header__title--bold">ForeCast</span>
        </h1>
      </Link>
      <nav className="header__navigation">
        {user ? (
          <>
            <Link to="/profile">
              <CgProfile size={36} />
            </Link>
            <Link to="/" className="header__link" onClick={handleSignOut}>
              <BiLogOut size={36} />
              Log out
            </Link>
          </>
        ) : (
          <GoogleButton className="header__link" onClick={handleSignIn} />
        )}
      </nav>
    </header>
  );
};

export default AppBar;
