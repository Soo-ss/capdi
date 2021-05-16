import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../redux/hooks/useCalcScore";
import "./surveyStyle.scss";

interface IProps {
  listNumber: string;
  title: string;
  nextPage: string;
  answer: string;
}

const MMSESurvey = (props: IProps) => {
  // QuestionLists.ts에 답 여러개 적어야함. 그리고 if(~~~ in lists){}
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
        <div className="alert_wrap">
          <p className="check_alert">반드시 입력해주세요!!</p>
        </div>
      ) : (
        <div className="next_wrap">
          <Link
            style={{ padding: "10px auto", fontSize: "20px" }}
            onClick={
              // 특정 문자 포함하는거 체크하기
              CheckAnswer.includes(props.answer)
                ? () => onMMSECalcScore(1)
                : () => onMMSECalcScore(0)
            }
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

export default MMSESurvey;
