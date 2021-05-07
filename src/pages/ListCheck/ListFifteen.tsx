import React from "react";

function ListCheck15() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 15{">"}{" "}
      </div>
      <br />
      <div className="question">사람들이 나에게 차갑게 대하는 것 같았다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer15" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer15" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer15" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer15" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck15;
