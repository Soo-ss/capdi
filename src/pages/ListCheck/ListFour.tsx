import React from "react";

function ListCheck4() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 4{">"}{" "}
      </div>
      <br />
      <div className="question">다른 사람들만큼 능력이 있다고 느꼈다.</div>
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

export default ListCheck4;
