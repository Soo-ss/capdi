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
      <h1 style={{ color: "#fff", fontSize: "20px" }}>푸터가 고정되었어요~</h1>
      {/* <input type="text" /> */}
    </div>
  );
};

export default Footer;
