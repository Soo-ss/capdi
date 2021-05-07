import React from "react";

function ListCheck3() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 3{">"}{" "}
      </div>
      <br />
      <div className="question">
        가족이나 친구가 도와주더라도 울적한 기분을 떨쳐 버릴 수 없었다.
      </div>
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

export default ListCheck3;
