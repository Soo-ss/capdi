import React from "react";
import back from "./img/back.png";
import "../scss/headerStyle.scss";
import { Link, useHistory, BrowserRouter } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const goBack = () => {
    // 현재 페이지가 MenuPage라면 뒤로가지지 않는다
    history.goBack();
  };
  return (
    <nav className="nav">
      <div className="back_button" onClick={goBack}>
        <img src={back} alt="back button" className="icon_img" />
        <p>Back</p>
      </div>
    </nav>
  );
};

export default Header;
