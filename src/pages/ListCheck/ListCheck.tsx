import React from "react";

function ListCheck() {
  return (
    <div className="main">
      <div className="title">
        <h1>우울증 자가진단 테스트</h1>
      </div>
      <div className="subtitle">
        우울증 검사의 테스트 결과가 우울증으로 나올 경우 치매 검사 결과가
        정확하지 않을 수 있습니다. <br />
        우울증 검사 결과 점수가 높은 경우, 3일간의 환기 후 테스트에 임해주세요.
      </div>
      <div className="question-title">
        {" "}
        {"<"}문항 1{">"}{" "}
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="not sad" /> 나는 슬프지 않다.{" "}
        <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="sad" /> 나는 슬프다. <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="always sad" /> 나는 항상 슬프고
        기운을 낼 수 없다. <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="always too sad" /> 나는 너무나
        슬프고 불행해서 도저히 견딜 수 없다. <br />
      </div>
    </div>
  );
}

export default ListCheck;
