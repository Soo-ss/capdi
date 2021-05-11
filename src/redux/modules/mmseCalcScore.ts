const MMSE_TOTAL_SCORE = "score/MMSE_TOTAL_SCORE" as const;

export const mmseTotalScore = (diff: number) => ({
  type: MMSE_TOTAL_SCORE,
  payload: diff,
});

type MMSEScoreAction = ReturnType<typeof mmseTotalScore>;

type MMSEScoreState = {
  mmseScore: number;
};

const initialState: MMSEScoreState = {
  mmseScore: 0,
};

function mmseCalcScore(
  state: MMSEScoreState = initialState,
  action: MMSEScoreAction
) {
  switch (action.type) {
    case MMSE_TOTAL_SCORE:
      return {
        mmseScore: state.mmseScore + action.payload,
      };
    default:
      return state;
  }
}

export default mmseCalcScore;
