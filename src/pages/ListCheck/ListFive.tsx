import React from "react";

function ListCheck5() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 5{">"}{" "}
      </div>
      <br />
      <div className="question">무슨 일을 하든 정신을 집중하기 힘들었다.</div>
      <br />
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
  );
}

export default ListCheck5;
