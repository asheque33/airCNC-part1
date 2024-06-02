import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        src={logoImg}
        height={100}
        width={100}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
