const MMSE_TOTAL_SCORE = "score/MMSE_TOTAL_SCORE" as const;
const RESET_MMSE_TOTAL_SCORE = "score/RESET_MMSE_TOTAL_SCORE" as const;

export const mmseTotalScore = (diff: number) => ({
  type: MMSE_TOTAL_SCORE,
  payload: diff,
});
export const resetMMSETotalScore = () => ({
  type: RESET_MMSE_TOTAL_SCORE,
});

type MMSEScoreAction =
  | ReturnType<typeof mmseTotalScore>
  | ReturnType<typeof resetMMSETotalScore>;

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
    case RESET_MMSE_TOTAL_SCORE:
      return {
        mmseScore: state.mmseScore * 0,
      };
    default:
      return state;
  }
}

export default mmseCalcScore;
