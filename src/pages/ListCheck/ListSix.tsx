import React from "react";

function ListCheck6() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 6{">"}{" "}
      </div>
      <br />
      <div className="question">우울했다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer6" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer6" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer6" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer6" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck6;
