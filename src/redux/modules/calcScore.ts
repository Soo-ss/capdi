const TOTAL_SCORE = "score/TOTAL_SCORE" as const;
const RESET_TOTAL_SCORE = "score/RESET_TOTAL_SCORE" as const;

export const totalScore = (diff: number) => ({
  type: TOTAL_SCORE,
  payload: diff,
});
export const resetTotalScore = () => ({
  type: RESET_TOTAL_SCORE,
});

type ScoreAction =
  | ReturnType<typeof totalScore>
  | ReturnType<typeof resetTotalScore>;

type ScoreState = {
  score: number;
};

const initialState: ScoreState = {
  score: 0,
};

function calcScore(state: ScoreState = initialState, action: ScoreAction) {
  switch (action.type) {
    case TOTAL_SCORE:
      return {
        score: state.score + action.payload,
      };
    case RESET_TOTAL_SCORE:
      return {
        score: state.score * 0,
      };
    default:
      return state;
  }
}

export default calcScore;
