import React from "react";

function ListCheck8() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 8{">"}{" "}
      </div>
      <br />
      <div className="question">미래에 대하여 희망적이라고 느꼈다.</div>
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

export default ListCheck8;
