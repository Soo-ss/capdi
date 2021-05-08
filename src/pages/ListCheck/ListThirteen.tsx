import React from "react";

function ListCheck13() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 13{">"}{" "}
      </div>
      <br />
      <div className="question">평소보다 말을 적게 했다 ; 말수가 줄었다.</div>
      <br />
      <div className="questions">
        <input type="radio" name="answer13" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer13" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer13" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" name="answer13" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
}

export default ListCheck13;
