import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { resetTotalScore, totalScore } from "../modules/calcScore";
import { mmseTotalScore, resetMMSETotalScore } from "../modules/mmseCalcScore";

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
  const onResetScore = useCallback(
    () => dispatch(resetTotalScore()),
    [dispatch]
  );
  const onMMSECalcScore = useCallback(
    (diff: number) => dispatch(mmseTotalScore(diff)),
    [dispatch]
  );
  const onResetMMSEScore = useCallback(
    () => dispatch(resetMMSETotalScore()),
    [dispatch]
  );

  return {
    score,
    mmseScore,
    onCalcScore,
    onResetScore,
    onMMSECalcScore,
    onResetMMSEScore,
  };
};

export default useCalcScore;
