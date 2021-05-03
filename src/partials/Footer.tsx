import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        position: "fixed",
        background: "linear-gradient(#7f00ff, #e100ff)",
        left: "0",
        bottom: "0",
      }}>
      <h1 style={{ color: "#fff", fontSize: "15px" }}>
        푸터에 메뉴를 넣을 예정이지만 필요없으면 안넣어도 됩니다.
      </h1>
      {/* <input type="text" /> */}
    </div>
  );
};

export default Footer;
