import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../redux/hooks/useCalcScore";
import "./surveyStyle.scss";

interface IProps {
  listNumber: string;
  title: string;
  nextPage: string;
}

const Survey = (props: IProps) => {
  const lists = [
    {
      caseName: "극히 드물다",
      caseScore: 0,
    },
    {
      caseName: "가끔",
      caseScore: 1,
    },
    {
      caseName: "자주",
      caseScore: 2,
    },
    {
      caseName: "거의 대부분",
      caseScore: 3,
    },
  ];
  const [Checked, setChecked] = useState(-1);
  const { onCalcScore } = useCalcScore();

  return (
    <div style={{ padding: "20px 0" }} className="main">
      <div className="question-title">{props.listNumber}</div>
      <br />
      <div className="question">{props.title}</div>
      <br />
      {lists.map((item, index) => {
        return (
          <div key={index} className="questions">
            <input
              type="radio"
              name="score"
              onChange={() => setChecked(item.caseScore)}
            />
            {item.caseName}
          </div>
        );
      })}
      {Checked === -1 ? (
        <p className="check_alert">반드시 체크해주세요!!</p>
      ) : (
        <div className="next_wrap">
          <Link
            style={{ padding: "10px auto", fontSize: "20px" }}
            onClick={() => onCalcScore(Checked)}
            to={props.nextPage}>
            <button className="next_page">
              다음 페이지 <i className="fas fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Survey;
