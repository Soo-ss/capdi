import React from "react";

interface IProps {
  listNumber: string;
  title: string;
}

const ListComponent = (props: IProps) => {
  return (
    <div style={{ padding: "20px 0" }} className="main">
      <div className="question-title">
        {"<"}
        {props.listNumber}
        {">"}
      </div>
      <br />
      <div className="question">{props.title}</div>
      <br />
      <div className="questions">
        <input type="radio" value="rarely" /> 극히 드물다 <br />
      </div>
      <div className="questions">
        <input type="radio" value="sometimes" /> 가끔 <br />
      </div>
      <div className="questions">
        <input type="radio" value="often" /> 자주 <br />
      </div>
      <div className="questions">
        <input type="radio" value="mostly" /> 거의 대부분 <br />
      </div>
    </div>
  );
};

export default ListComponent;
