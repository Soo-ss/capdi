import React from "react";
import "../scss/footerStyle.scss";
import exam from "./img/exam.png";
import clock from "./img/clock.png";
import preventive from "./img/preventive.png";
import back from "./img/back.png";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="footer">
      <Link to="/q1">
        <div>
          <img src={exam} alt="mmse test" className="icon_img" />
        </div>
      </Link>
      <Link to="/clock">
        <div>
          <img src={clock} alt="clock test" className="icon_img" />
        </div>
      </Link>
      <Link to="/preventive">
        <div>
          <img src={preventive} alt="preventive" className="icon_img" />
        </div>
      </Link>

      <div className="back_icon">
        <img
          src={back}
          alt="back button"
          className="icon_img"
          onClick={goBack}
        />
      </div>
    </div>
  );
};

export default Footer;
