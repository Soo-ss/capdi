import React from "react";
import Layout from "../../partials/Layout";
import MMSEStandard from "./img/MMSEStandard.png";
import useCalcScore from "../../redux/hooks/useCalcScore";
import { Link } from "react-router-dom";
import "./resultStyle.scss";

const MMSEResult = () => {
  const { mmseScore } = useCalcScore();

  const render_MMSEResult = () => {
    if (mmseScore >= 24) {
      return (
        <p className="result_description">
          정상입니다. 정확한 결과를 위해 시계그리기 검사까지 해보는 것을
          권장합니다.
        </p>
      );
    } else if (mmseScore <= 23 && mmseScore >= 20) {
      return (
        <p className="result_description">
          치매가 의심됩니다. 정밀검사를 받아보세요. 정확한 결과를 위해
          시계그리기 검사까지 받아보는 것을 권장합니다.
        </p>
      );
    } else if (mmseScore < 20) {
      return (
        <p className="result_description">
          치매로 판단됩니다. 인근 병원에서 진료를 받기 바랍니다. 정확한 결과를
          위해 시계그리기 검사까지 받아보는 것을 권장합니다.
        </p>
      );
    }
  };

  return (
    <Layout>
      <h1 className="result_score">합산 점수 : {mmseScore}점 </h1>
      <div className="result_description2">
        {render_MMSEResult()}</div>
      <h1 className="check_result">채점 기준표</h1>
      <img src={MMSEStandard} alt="mypic" className="standard__img" />
      {"*"}위의 표에 제시된 점수 이하일 경우 진단검사로 의뢰합니다.

      <div className="return_test">
        <Link to="/mq1">
          <button className="submit_btn">다시 테스트하기</button>
        </Link>
        <Link to="/clock">
          <button className="submit_btn">시계그리기 검사하기</button>
        </Link>
      </div>
    </Layout>
  );
};

export default MMSEResult;
