import React from "react";

function ListCheck14() {
  return (
    <div className="main">
      <div className="question-title">
        {" "}
        {"<"}문항 14{">"}{" "}
      </div>
      <br />
      <div className="question">세상에 홀로 있는 듯한 외로움을 느꼈다.</div>
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

export default ListCheck14;
