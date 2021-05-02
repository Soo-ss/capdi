import React from "react";
import Header from "../../partials/Header";
import "./menuStyle.scss";

function Menu() {
  return (
    // 메뉴창
    <div className="container">
      <Header />
      <h1 className="menu__title">수정완료</h1>
      <div className="menu__list"></div>
    </div>
  );
}

export default Menu;
