import React from "react";
import Layout from "../../partials/Layout";
import { Link } from "react-router-dom";
import ListTwo from "./ListTwo";
import ListThree from "./ListThree";
import ListFour from "./ListFour";
import ListFive from "./ListFive";
import ListSix from "./ListSix";
import ListSeven from "./ListSeven";
import ListEight from "./ListEight";
import ListNine from "./ListNine";
import ListTen from "./ListTen";
import ListEleven from "./ListEleven";
import ListTwelve from "./ListTwelve";
import ListThirteen from "./ListThirteen";
import ListFourteen from "./ListFourteen";
import ListFifteen from "./ListFifteen";
import ListSixteen from "./ListSixteen";
import ListSeventeen from "./ListSeventeen";
import ListEighteen from "./ListEighteen";
import ListNineteen from "./ListNineteen";
import ListTwenty from "./ListTwenty";
function ListCheck() {
  return (
    <Layout>
      <div className="main">
        <div className="title">
          <h1>우울증 자가진단 테스트</h1>
        </div>
        <br />
        <div className="subtitle">
          우울증 검사의 테스트 결과가 우울증으로 나올 경우 치매 검사 결과가
          정확하지 않을 수 있습니다. <br />
          우울증 검사 결과 점수가 높은 경우, 3일간의 환기 후 테스트에
          임해주세요.
        </div>
        <br />
        <div className="explanation">
          {" "}
          {"<"}답변 구분{">"} <br /> <br />
          극히 드물게(1주 중 1일 이하) <br />
          자주(1주 중 3일~4일) <br />
          가끔(1주 중 1~2일)
          <br />
          거의 대부분(1주 중 5일~7일)
          <br /> <br />
        </div>

        <div className="base-question">
          나는 지난 일주일 동안... <br />
        </div>
        <br />
        <div className="question-title">
          {" "}
          {"<"}문항 1{">"}
        </div>
        <br />
        <div className="question">
          평소에는 아무렇지도 않던 일들이 귀찮게 느껴졌다. <br />
          <br />
        </div>

        <div className="questions">
          <input type="radio" name="answer" value="rarely" /> 극히 드물다 <br />
        </div>
        <div className="questions">
          <input type="radio" name="answer" value="sometimes" /> 가끔 <br />
        </div>
        <div className="questions">
          <input type="radio" name="answer" value="often" /> 자주 <br />
        </div>
        <div className="questions">
          <input type="radio" name="answer" value="mostly" /> 거의 대부분 <br />
        </div>
      </div>
      <br />
      <ListTwo /> <br />
      <ListThree />
      <br />
      <ListFour />
      <br />
      <ListFive />
      <br />
      <ListSix />
      <br />
      <ListSeven />
      <br />
      <ListEight />
      <br />
      <ListNine />
      <br />
      <ListTen />
      <br />
      <ListEleven />
      <br />
      <ListTwelve />
      <br />
      <ListThirteen />
      <br />
      <ListFourteen />
      <br />
      <ListFifteen />
      <br />
      <ListSixteen />
      <br />
      <ListSeventeen />
      <br />
      <ListEighteen />
      <br />
      <ListNineteen />
      <br />
      <ListTwenty />
      <br />
      <br />
      <br />
      <Link to="/calc-depression">
        <div className="depress_result">
          <div className="move_to_dep_result">
            <div className="menu_description">
              <p className="description_title">우울증 진단 결과 보기</p>
            </div>
          </div>
          <button className="calculation_button">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </Link>
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
}

export default ListCheck;
