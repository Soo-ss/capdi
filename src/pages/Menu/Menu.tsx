import React from "react";
import Header from "../../partials/Header";
import "./menuStyle.scss";
import mmse from "./img/mmse.png";
import clock from "./img/clock.png";
import preventive from "./img/preventive.png";

function Menu() {
  return (
    // 메뉴창
    <div className="container">
      <h1 className="menu__title">메뉴</h1>
      <div className="mmse">
        <div className="mmse__menu">
          <img src={mmse} alt="mypic" className="logo__img" />
          <div className="menu__discription">
            <p className="discription__title">MMSE-M검사</p>
            <p className="discription">
              설문 형식의 테스트로, 5분만에 치매를 진단할 수 있습니다.
            </p>
          </div>
        </div>
        <button className="right__button1">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>

      <div className="clock">
        <div className="clock__menu">
          <img src={clock} alt="mypic" className="logo__img" />
          <div className="menu__discription">
            <p className="discription__title">시계그리기 검사</p>
            <p className="discription">
              시계그리기 검사를 통해 치매를 진단할 수 있습니다.
            </p>
          </div>
        </div>
        <button className="right__button2">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>

      <div className="preventive">
        <div className="preventive__menu">
          <img src={preventive} alt="mypic" className="logo__img" />
          <div className="menu__discription">
            <p className="discription__title">치매 예방법</p>
            <p className="discription">다양한 치매예방법을 소개합니다.</p>
          </div>
        </div>
        <button className="right__button3">
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Menu;
