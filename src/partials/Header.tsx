import React from "react";
import back from "./img/back.png";
import "../scss/headerStyle.scss";
import { useHistory, Link } from "react-router-dom";
import { isElementAccessExpression } from "typescript";

const Header = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  var lists = {
    q1: "/q1",
    clock: "/clock",
    mq1: "/mq1",
    result: "/result",
    mmse_result: "/mmse-result",
    clock_result: "/clock-result",
  };

  if (history.location.pathname === "/") {
    return <div></div>;
  } else {
    if (history.location.pathname.split("/")[1] in lists) {
      return (
        <nav className="nav">
          <Link to="/">
            <div className="back_button">
              <img src={back} alt="back button" className="icon_img" />
              <p>Back</p>
            </div>
          </Link>
        </nav>
      );
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
  }
};

export default Header;
