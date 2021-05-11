import { combineReducers } from "redux";
import calcScore from "./calcScore";
import mmseCalcScore from "./mmseCalcScore";

const rootReducer = combineReducers({
  calcScore,
  mmseCalcScore,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
