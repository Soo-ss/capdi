import React from "react";
import Header from "../../partials/Header";
import "./menuStyle.scss";
import mmse from "./img/abc.png";



function Menu() {
  return (
    
    // 메뉴창
    <div className="container">
      <h1 className="menu__title">메뉴</h1>
      
      

      <div className="mmse">
        <img src={mmse} alt='mypic' />
        <div className="mmse__discription">
          <a>MMSE-M검사</a>
          <p className="discription">5분만에 치매를 판단할 수 있습니다.</p>
        </div>

        <button className="right__button1">
          <i className="fas fa-angle-right"></i>
        </button>

      </div>


      <div className="clock">
        <div className="clock__discription">
          <a>시계그리기 검사</a>
          <p className="discription">간단한 시계그리기로 치매를 판단할 수 있습니다.</p>
          <button className="right__button2">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>

      </div>
      <div className="preventive">
        <div className="prventive__discription">
            <a>치매예방법 소개</a>
            <p className="discription">치매를 예방할 수 있는 방법을 소개합니다.</p>
            <button className="right__button3">
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Menu;
