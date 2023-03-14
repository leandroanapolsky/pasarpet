import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { petsContext } from "./Context";
import { logContext } from "./logContext";
import logo from "./logo2.png";

function Navbar() {
  const { loggedIn, logUser } = useContext(logContext);
  const { modalShow, showLogin } = useContext(petsContext);

  return (
    <div className="navbar">
      <Link to={{ pathname: "/" }}>
        <img src={logo} alt="" className="logo" />
      </Link>

      <div className="nav-right">
        <Link to={{ pathname: "/" }} className="nav-item">
          Home
        </Link>
        <Link to={{ pathname: "/Search" }} className="nav-item">
          Search
        </Link>
        {loggedIn ? (
          <Link to={{ pathname: "/user" }} className="nav-item">
            Hi, User
          </Link>
        ) : (
          <div className="nav-item" onClick={(e) => showLogin()}>
            Log In
          </div>
        )}
        {/* <div className="nav-item" onClick={(e) => showLogin()}>
          Log In
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
