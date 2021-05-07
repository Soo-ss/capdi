import React from "react";

function ListCheck11() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 11{">"}{" "}
      </div>
      <br />
      <div className="question">잠을 설쳤다 ; 잠을 잘 이루지 못했다.</div>
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

export default ListCheck11;
