const TOTAL_SCORE = "score/TOTAL_SCORE" as const;

export const totalScore = (diff: number) => ({
  type: TOTAL_SCORE,
  payload: diff,
});

type ScoreAction = ReturnType<typeof totalScore>;

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
    default:
      return state;
  }
}

export default calcScore;
