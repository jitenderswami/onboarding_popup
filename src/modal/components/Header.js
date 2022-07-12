import React from "react";
import ApnaLogo from "../util/ApnaLogo.js";
import TextBox from "./TextBox.js";

const Header = () => {
  return (
    <div className="header">
      <ApnaLogo />
      <TextBox />
    </div>
  );
};

export default Header;
