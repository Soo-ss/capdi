import React from "react";

function ListCheck20() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 20{">"}{" "}
      </div>
      <br />
      <div className="question">도무지 무엇을 시작할 기운이 나지 않았다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer20" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer20" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer20" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer20" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck20;
