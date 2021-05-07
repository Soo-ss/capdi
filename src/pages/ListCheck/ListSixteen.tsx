import React from "react";

function ListCheck16() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 16{">"}{" "}
      </div>
      <br />
      <div className="question">생활이 즐거웠다.</div>
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

export default ListCheck16;
