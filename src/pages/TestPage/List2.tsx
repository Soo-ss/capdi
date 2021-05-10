import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCalcScore from "../../redux/hooks/useCalcScore";

const List2 = () => {
  const { score, onCalcScore } = useCalcScore();
  const [Checked, setChecked] = useState(1);
  console.log(Checked);

  return (
    <div>
      <h1>{score}</h1>
      <input
        type="radio"
        value={1}
        name="score"
        onChange={() => setChecked(1)}
      />
      <input
        type="radio"
        value={2}
        name="score"
        onChange={() => setChecked(2)}
      />
      <input
        type="radio"
        value={3}
        name="score"
        onChange={() => setChecked(3)}
      />
      <Link onClick={() => onCalcScore(Checked)} to="/list3">
        다음 페이지
      </Link>
    </div>
  );
};

export default List2;
