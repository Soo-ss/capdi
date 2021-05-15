import React from "react";
import "./menuStyle.scss";
import mmse from "./img/mmse.png";
import clock from "./img/clock.png";
import preventive from "./img/preventive.png";
import depression from "./img/depression.png";
import appIcon from "./img/appIcon.png";
import Layout from "../../partials/Layout";
import { Link } from "react-router-dom";
import useCalcScore from "../../redux/hooks/useCalcScore";

function Menu() {
  const { onResetScore, onResetMMSEScore } = useCalcScore();
  return (
    <Layout>
      <div className="menu__bar">
      <img src={appIcon} alt="mypic" className="appIcon__img" />
      저리가! 치매
      </div>
      <Link to="/q1" onClick={() => onResetScore()}>
        <div className="depression">
          <div className="depression__menu">
            <img src={depression} alt="mypic" className="logo__img" />
            <div className="menu__discription">
              <p className="discription__title">우울증 검사</p>
              <p className="discription">
                치매 검사를 하기 전 <br></br>우울증 테스트부터 먼저 해보세요.
              </p>
            </div>
          </div>
          <button className="depression__button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>

      <Link to="/userInput" onClick={() => onResetMMSEScore()}>
        <div className="mmse">
          <div className="mmse__menu">
            <img src={mmse} alt="mypic" className="logo__img" />
            <div className="menu__discription">
              <p className="discription__title">MMSE 검사</p>
              <p className="discription">
                설문 형식의 테스트로, <br></br>5분만에 치매를 진단할 수
                있습니다.
              </p>
            </div>
          </div>
          <button className="mmse__button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>

      <Link to="/clock">
        <div className="clock">
          <div className="clock__menu">
            <img src={clock} alt="mypic" className="logo__img" />
            <div className="menu__discription">
              <p className="discription__title">시계그리기 검사</p>
              <p className="discription">
                시계그리기 검사를 통해 <br></br>치매를 진단할 수 있습니다.
              </p>
            </div>
          </div>
          <button className="clock__button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>

      <Link to="/Preventive">
        <div className="preventive">
          <div className="preventive__menu">
            <img src={preventive} alt="mypic" className="logo__img" />
            <div className="menu__discription">
              <p className="discription__title">치매 예방법</p>
              <p className="discription">다양한 치매 예방법을 소개합니다!</p>
            </div>
          </div>
          <button className="preventive__button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>
    </Layout>
  );
}

export default Menu;
