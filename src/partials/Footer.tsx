import React from "react";
import "../scss/footerStyle.scss";
import exam from "./img/exam.png";
import clock from "./img/clock.png";
import preventive from "./img/preventive.png";
import depression from "./img/depression.png";
import home from "./img/home.png";
import { Link, useHistory } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/mq1">
        <div>
          <img src={exam} alt="mmse test" className="icon_img" />
          <p>MMSE 검사</p>
        </div>
      </Link>
      <Link to="/clock">
        <div>
          <img src={clock} alt="clock test" className="icon_img" />
          <p>시계그리기 검사</p>
        </div>
      </Link>
      <Link to="/">
        <div>
          <img src={home} alt="menu" className="icon_img" />
          <p>메뉴</p>
        </div>
      </Link>
      <Link to="/q1">
        <div>
          <img src={depression} alt="depression" className="icon_img" />
          <p>우울증 검사</p>
        </div>
      </Link>
      <Link to="/preventive">
        <div>
          <img src={preventive} alt="preventive" className="icon_img" />
          <p>치매 예방법</p>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
