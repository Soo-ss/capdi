import React from "react";
import Layout from "../../partials/Layout";
import useCalcScore from "../../redux/hooks/useCalcScore";

const Result = () => {
  const { score } = useCalcScore();

  return (
    <Layout>
      <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>검사 결과</h1>
      <h1>20개 페이지 합산 점수: {score}</h1>
    </Layout>
  );
};

export default Result;
