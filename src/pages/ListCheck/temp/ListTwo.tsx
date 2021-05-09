import React from "react";

function ListCheck2() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 2{">"}{" "}
      </div>
      <br />
      <div className="question">먹고 싶지 않았다 ; 입맛이 없었다.</div>
      <div className="questions">
        <input type="radio" name="answer2" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer2" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer2" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer2" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck2;
