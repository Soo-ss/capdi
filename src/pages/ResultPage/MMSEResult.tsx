import React from "react";
import Layout from "../../partials/Layout";
import useCalcScore from "../../redux/hooks/useCalcScore";
import { Link } from "react-router-dom";
import "./resultStyle.scss";

const MMSEResult = () => {
  const { mmseScore } = useCalcScore();

  const render_MMSEResult = () => {
    if (mmseScore>=24) {
      return  <p className="result_description">정상입니다.</p>
    } else if (mmseScore <=23 && mmseScore >=20) {
      return <p className="result_description">치매가 의심됩니다. 정밀검사를 받아보세요.</p>
    } else if (mmseScore <20) {
      return <p className="result_description">치매로 판단됩니다. 인근 병원에서 진료를 받기 바랍니다.</p>
    }
  }

  return (
    <Layout>
      <h1 className = "check_result">검사 결과</h1>
      <h1 className="result_score">합산 점수 : {mmseScore}점 </h1>
      <div className="result_description2">
        {render_MMSEResult()}
        </div>
      
      <Link to="/mq1">
        <button className="return_test">
          다시 테스트하기
        </button>
      </Link>
    </Layout>
  );
};

export default MMSEResult;
