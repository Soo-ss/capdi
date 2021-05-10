import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { totalScore } from "../modules/calcScore";

const useCalcScore = () => {
  const score = useSelector((state: RootState) => state.calcScore.score);
  const dispatch = useDispatch();

  const onCalcScore = useCallback(
    (diff: number) => dispatch(totalScore(diff)),
    [dispatch]
  );

  return {
    score,
    onCalcScore,
  };
};

export default useCalcScore;
