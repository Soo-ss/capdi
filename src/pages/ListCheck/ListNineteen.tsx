import React from "react";

function ListCheck19() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 19{">"}{" "}
      </div>
      <br />
      <div className="question">사람들이 나를 싫어하는 것 같았다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer19" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer19" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer19" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer19" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck19;
