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

const MMSESurveyThree = (props: IProps) => {
  const [CheckFirst, setCheckFirst] = useState("");
  const [CheckSecond, setCheckSecond] = useState("");
  const [CheckThird, setCheckThird] = useState("");
  const { onMMSECalcScore } = useCalcScore();

  let arr = props.answer.split(",");

  // arr[0], arr[1], arr[2]
  // 나무, 자동차, 모자 순서대로 나오는 경우만 1점씩 준다.
  const onCheckScore = () => {
    let tmpScore = 0;
    if (CheckFirst === arr[0]) {
      tmpScore++;
    }
    if (CheckSecond === arr[1]) {
      tmpScore++;
    }
    if (CheckThird === arr[2]) {
      tmpScore++;
    }
    onMMSECalcScore(tmpScore);
  };

  return (
    <div style={{ padding: "20px 0" }} className="main">
      <div className="question-title">{props.listNumber}</div>
      <br />
      <div className="question">{props.title}</div>
      <br />
      <div className="input-3">
        <input
          className="answer-input-3"
          placeholder="정답을 입력해 주세요."
          type="search"
          onChange={(e) => setCheckFirst(e.target.value)}
        />
        <input
          className="answer-input-3"
          placeholder="정답을 입력해 주세요."
          type="search"
          onChange={(e) => setCheckSecond(e.target.value)}
        />
        <input
          className="answer-input-3"
          placeholder="정답을 입력해 주세요."
          type="search"
          onChange={(e) => setCheckThird(e.target.value)}
        />
      </div>
      {CheckFirst === "" || CheckSecond === "" || CheckThird === "" ? (
        <p className="check_alert">반드시 입력해주세요!!</p>
      ) : (
        <Link
          style={{ padding: "10px auto", fontSize: "20px" }}
          onClick={onCheckScore}
          to={props.nextPage}
        >
          <button className="next_page">
            다음 페이지 <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      )}
    </div>
  );
};

export default MMSESurveyThree;
