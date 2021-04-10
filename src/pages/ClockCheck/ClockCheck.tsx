import React from "react";
import Layout from "../../partials/Layout";

// rafce
const ClockCheck = () => {
  const lists = [];
  for (let i = 0; i < 100; i++) {
    lists.push(i);
  }
  return (
    <Layout>
      <h1 style={{ fontSize: "25px" }}>컨텐츠 영역</h1>
      <ul>
        {lists.map((index, item) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Layout>
  );
};

export default ClockCheck;
