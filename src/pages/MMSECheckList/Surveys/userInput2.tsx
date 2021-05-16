import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../partials/Layout";

const userInput2 = () => {
  return (
    <Layout>
      <div className="MMSE_input2">
        <p className="input_question">
          Q. 지금 계신 곳은 무슨 도/특별시/광역시입니까?
        </p>
        <input
          className="answer-input"
          placeholder="입력해 주세요."
          type="search"
        />
      </div>
      <div className="MMSE_input2">
        <p className="input_question">Q. 지금 계신 곳은 무슨 시/군입니까?</p>
        <input
          className="answer-input"
          placeholder="입력해 주세요."
          type="search"
        />
      </div>
      <div className="MMSE_input2">
        <p className="input_question">
          Q. 지금 계신 곳은 무슨 구/동/읍/면입니까?
        </p>
        <input
          className="answer-input"
          placeholder="입력해 주세요."
          type="search"
        />
      </div>
      <div className="MMSE_input2">
        <p className="input_question">Q. 지금 이 건물의 몇 층에 있습니까?</p>
        <input
          className="answer-input"
          placeholder="입력해 주세요."
          type="search"
        />
      </div>
      <div className="MMSE_input2">
        <p className="input_question">Q. 지금 계신 장소의 이름이 무엇입니까?</p>
        <input
          className="answer-input"
          placeholder="입력해 주세요."
          type="search"
        />
      </div>
      <div className="start_test">
        <Link to="/mq1">
          <div className="go_MMSE">MMSE검사 시작하기</div>
        </Link>
      </div>
    </Layout>
  );
};

export default userInput2;
