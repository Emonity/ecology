import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Leave</MyButton>
      <div className="navbar__links">
        <Link to="/about">Map </Link>
        <Link to="/posts"> Events</Link>
      </div>
    </div>
  );
};

export default Navbar;
