import React from "react";

function ListCheck12() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 12{">"}{" "}
      </div>
      <br />
      <div className="question">행복했다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer" value="mostly" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="often" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="sometimes" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer" value="rarely" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck12;
