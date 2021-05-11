import React from "react";
import back from "./img/back.png";
import "../scss/headerStyle.scss";
import { Link, useHistory, BrowserRouter } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  if (history.location.pathname === "/") {
    return <div></div>;
  } else {
    return (
      <nav className="nav">
        <div className="back_button" onClick={goBack}>
          <img src={back} alt="back button" className="icon_img" />
          <p>Back</p>
        </div>
      </nav>
    );
  }
};

export default Header;
