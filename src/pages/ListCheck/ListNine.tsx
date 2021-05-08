import React from "react";

function ListCheck9() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 9{">"}{" "}
      </div>
      <br />
      <div className="question">내 인생은 실패작이라는 생각이 들었다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer9" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer9" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer9" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer9" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck9;
