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
  let date = new Date();
  const [CheckAnswer, setCheckAnswer] = useState("");
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
          type="search"
          onChange={(e) => setCheckAnswer(e.target.value)}
        />
      </div>
      {CheckAnswer === "" ? (
        <p className="check_alert">반드시 입력해주세요!!</p>
      ) : (
        <Link
          style={{ padding: "10px", fontSize: "20px" }}
          onClick={
            CheckAnswer === date.getFullYear().toString()
              ? () => onMMSECalcScore(1)
              : () => onMMSECalcScore(0)
          }
          to={props.nextPage}
        >
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
