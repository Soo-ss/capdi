import React from "react";
import Layout from "../../partials/Layout";
import useCalcScore from "../../redux/hooks/useCalcScore";

const MMSEResult = () => {
  const { score } = useCalcScore();

  let totalScore = 0;
  const lists = [
    {
      name: "지남력 점수",
      score: 10,
    },
    {
      name: "기억력 점수",
      score: 9,
    },
    {
      name: "주의력 점수",
      score: 8,
    },
    {
      name: "시공간기능 점수",
      score: 7,
    },
    {
      name: "언어기능 점수",
      score: 6,
    },
    {
      name: "집행기능 점수",
      score: 5,
    },
  ];

  for (let i = 0; i < lists.length; i++) {
    totalScore += lists[i].score;
  }
  return (
    <Layout>
      <h1 style={{ fontSize: "50px", paddingBottom: "20px" }}>검사 결과</h1>
      <p style={{ fontSize: "25px" }}>유저명</p>
      <p style={{ color: "#99878d", paddingBottom: "20px" }}>캡디 유저</p>
      <p style={{ paddingBottom: "20px" }}>결과 점수 100점</p>
      <ul style={{ paddingBottom: "20px" }}>
        {lists.map((item, index) => {
          return (
            <li key={index}>
              {item.name}
              &nbsp;
              <span>{item.score}</span>
            </li>
          );
        })}
      </ul>
      <p style={{ fontSize: "30px" }}>
        위 결과에 따라 총점 {totalScore}점으로 정상/비정상 입니다.
      </p>
      <h1>20개 페이지 합산 점수: {score}</h1>
    </Layout>
  );
};

export default MMSEResult;
