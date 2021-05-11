import React from "react";
import Layout from "../../partials/Layout";
import useCalcScore from "../../redux/hooks/useCalcScore";
import { Link } from "react-router-dom";
import "./resultStyle.scss";


const Result = () => {
  const { score } = useCalcScore();

  const render_depressionResult = () => {
    if (score>25) {
      return  <p className="result_description">
        다양한 우울증상으로 일상생활에 영향을 주고 있는 상태입니다. 
        이러한 상태가 2주 이상 지속된다면 전문가와의 상담을 반드시 받아보세요.
      </p>
    } else if (score <=24 && score >=16) {
      return <p className="result_description">
        가벼운 우울감을 겪고 있는 상태입니다. 
        우울증 예방을 위해 운동, 여가활동, 대인관계 맺기 등 
        즐거움을 주는 활동에 적극적으로 참여해보세요.
      </p>
    } else if (score <=15 && score >=0) {
      return <p className="result_description">
        편안한 상태입니다. 
        지속적으로 정신건강에 관심을 갖고 
        예방을 위해 년1회 정기검사도 잊지 마세요.
        </p>
    }
  }

  
  return (
    <Layout>
      <h1 className = "check_result">검사 결과</h1>
      <h1 className="result_score">합산 점수 : {score}점 </h1>
      <div className="result_description2">
        {render_depressionResult()}
      </div>
      <Link to="/q1">
        <button className="return_test">
          다시 테스트하기
        </button>
      </Link>

    </Layout>
  );
};

export default Result;
