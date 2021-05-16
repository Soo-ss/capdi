import React from "react";
import Layout from "../../partials/Layout";
import useCalcScore from "../../redux/hooks/useCalcScore";
import { Link } from "react-router-dom";
import "./resultStyle.scss";
import depressionStandard from "./img/depressionStandard.png";

const Result = () => {
  const { score } = useCalcScore();

  
  const renderDepressionResult = () => {
    if (score >= 25) {
      return (
        <p className="result_description">
          다양한 우울증상으로 일상생활에 영향을 주고 있는 상태입니다. 이러한
          상태가 2주 이상 지속된다면 전문가와의 상담을 반드시 받아보세요. 치매
          검사 결과의 정확성을 위해 치매 검사를 지양합니다.
        </p>
      );
    } else if (score <= 24 && score >= 16) {
      return (
        <p className="result_description">
          가벼운 우울감을 겪고 있는 상태입니다. 우울증 예방을 위해 운동,
          여가활동, 대인관계 맺기 등 즐거움을 주는 활동에 적극적으로
          참여해보세요.
        </p>
      );
    } else if (score <= 15 && score >= 0) {
      return (
        <p className="result_description">
          편안한 상태입니다. 지속적으로 정신건강에 관심을 갖고 예방을 위해 년1회
          정기검사도 잊지 마세요.
        </p>
      );
    }
  };

  if (score > 25) {
    return (
      <Layout>
        <h1 className="result_score">합산 점수 : {score}점 </h1>
        <div className="result_description2">{renderDepressionResult()}</div>
      
        <h1 className="check_result">채점 기준</h1>
        <div className="result_description2">
          <div className="result_description">
          0~15점 : 우울하지 않은 상태<br></br>
          16~24점 : 가벼운 우울 상태<br></br>
          25점 이상 : 심각한 우울 상태
          </div>
        </div>
        <div className="return_test">
          <Link to="/q1">
            <button className="submit_btn">다시 테스트하기</button>
          </Link>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1 className="result_score">합산 점수 : {score}점 </h1>
        <div className="result_description2">{renderDepressionResult()}</div>

        <h1 className="check_result">채점 기준</h1>
        <div className="result_description2">
          <div className="result_description">
            0~15점 : 우울하지 않은 상태<br></br>
            16~24점 : 가벼운 우울 상태<br></br>
            25점 이상 : 심각한 우울 상태
          </div>
        </div>
        <div className="return_test">
          <Link to="/q1">
            <button className="submit_btn">다시 테스트하기</button>
          </Link>
          <Link to="/userInput">
            <button className="submit_btn">MMSE 치매 검사하기</button>
          </Link>
        </div>
      </Layout>
    );
  }
};

export default Result;
