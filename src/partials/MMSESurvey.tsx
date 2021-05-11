import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../redux/hooks/useCalcScore";

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
        <p style={{ padding: "10px", fontSize: "20px" }}>
          반드시 체크해주세요!!
        </p>
      ) : (
        <Link
          style={{ padding: "10px", fontSize: "20px" }}
          onClick={() => onMMSECalcScore(Checked)}
          to={props.nextPage}
        >
          다음 페이지
        </Link>
      )}
    </div>
  );
};

export default MMSESurvey;
