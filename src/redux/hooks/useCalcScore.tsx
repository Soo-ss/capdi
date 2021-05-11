import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { totalScore } from "../modules/calcScore";
import { mmseTotalScore } from "../modules/mmseCalcScore";

const useCalcScore = () => {
  const score = useSelector((state: RootState) => state.calcScore.score);
  const mmseScore = useSelector(
    (state: RootState) => state.mmseCalcScore.mmseScore
  );

  const dispatch = useDispatch();

  const onCalcScore = useCallback(
    (diff: number) => dispatch(totalScore(diff)),
    [dispatch]
  );
  const onMMSECalcScore = useCallback(
    (diff: number) => dispatch(mmseTotalScore(diff)),
    [dispatch]
  );

  return {
    score,
    mmseScore,
    onCalcScore,
    onMMSECalcScore,
  };
};

export default useCalcScore;
