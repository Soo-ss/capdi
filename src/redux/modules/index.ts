import { combineReducers } from "redux";
import calcScore from "./calcScore";

const rootReducer = combineReducers({
  calcScore,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
