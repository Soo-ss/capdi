import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../partials/Layout";
import "../listStyle.scss";

const userInput = () => {
  return (
    <Layout>
      <h1 className="notice_title">
        {"< "}주의사항{" >"}
      </h1>
      <div className="MMSE_notice">
        <ul id="notcie_list">
          <li>1. 보호자가 반드시 필요합니다.</li>
          <li>
            2. 검사자의 학력, 성별, 나이에 따라 검사기준이 달라지므로 정확히
            입력해주시기 바랍니다.
          </li>
          <li>3. 우울증이 심할 경우 결과가 정확하지 않을 수 있습니다. </li>
          <li>4. 문항은 총 19문항으로 구성되어 있습니다.</li>
          <li>5. 연필과 종이를 준비해주십시오.</li>
        </ul>
      </div>

      <div className="MMSE_input">
        <p className="input_question">Q. 검사자의 성별을 선택해주세요</p>
        <div className="answer_btn">
          <label>
            <input type="radio" name="gender" value="man" />
            남자
          </label>
          <label>
            <input type="radio" name="gender" value="man" />
            여자
          </label>
        </div>
      </div>

      <div className="MMSE_input">
        <p className="input_question">Q. 검사자의 연령대를 선택해주세요</p>
        <div className="answer_btn">
          <label>
            <input type="radio" name="year" value="60" />
            60~69세
          </label>
          <label>
            <input type="radio" name="year" value="70" />
            70~74세
          </label>
          <label>
            <input type="radio" name="year" value="75" />
            75~79세
          </label>
          <label>
            <input type="radio" name="year" value="80" />
            80세 이상
          </label>
        </div>
      </div>

      <div className="MMSE_input">
        <p className="input_question last_question">
          Q. 검사자의 학력을 선택해주세요.
        </p>
        <div className="answer_btn">
          <label>
            <input type="radio" name="education" value="0" />
            0-3년
          </label>
          <label>
            <input type="radio" name="education" value="4" />
            4-6년
          </label>
          <label>
            <input type="radio" name="education" value="7" />
            7-12년
          </label>
          <label>
            <input type="radio" name="education" value="13" />
            13년 이상
          </label>
        </div>
      </div>
      <div className="start_test">
        <Link to="/mq1">
          <div className="go_MMSE">MMSE검사 시작하기</div>
        </Link>
      </div>
    </Layout>
  );
};

export default userInput;
