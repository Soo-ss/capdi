import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../redux/hooks/useCalcScore";
import "./surveyStyle.scss";

interface IProps {
  listNumber: string;
  title: string;
  nextPage: string;
}

const MMSESurvey = (props: IProps) => {
  const lists = [
    {
      caseName: "틀림",
      caseScore: 0,
    },
    {
      caseName: "맞음",
      caseScore: 1,
    },
  ];
  const [Checked, setChecked] = useState(-1);
  const { onMMSECalcScore } = useCalcScore();

  return (
    <div style={{ padding: "20px 0" }} className="main">
      <div className="question-title">{props.listNumber}</div>
      <br />
      <div className="question">{props.title}</div>
      <br />
      <div>
        <input
          className="answer-input"
          placeholder="정답을 입력해 주세요."
          type="search"></input>
      </div>
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
        <Link
          style={{ padding: "10px", fontSize: "20px" }}
          onClick={() => onMMSECalcScore(Checked)}
          to={props.nextPage}>
          <button className="next_page">
            다음 페이지
            <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      )}
    </div>
  );
};

export default MMSESurvey;
