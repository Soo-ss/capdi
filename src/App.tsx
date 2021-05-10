import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClockCheck from "./pages/ClockCheck/ClockCheck";
import MenuPage from "./pages/Menu/Menu";
import Result from "./pages/ResultPage/Result";
import ShapeCheck from "./pages/ShapeCheck/ShapeCheck";
import List1 from "./pages/TestPage/List1";
import List2 from "./pages/TestPage/List2";
import List3 from "./pages/TestPage/List3";
import Q1 from "./pages/ListCheck/Surveys/Q1";
import Q2 from "./pages/ListCheck/Surveys/Q2";
import Q3 from "./pages/ListCheck/Surveys/Q3";
import Q4 from "./pages/ListCheck/Surveys/Q4";
import Q5 from "./pages/ListCheck/Surveys/Q5";
import Q6 from "./pages/ListCheck/Surveys/Q6";
import Q7 from "./pages/ListCheck/Surveys/Q7";
import Q8 from "./pages/ListCheck/Surveys/Q8";
import Q9 from "./pages/ListCheck/Surveys/Q9";
import Q10 from "./pages/ListCheck/Surveys/Q10";
import Q11 from "./pages/ListCheck/Surveys/Q11";
import Q12 from "./pages/ListCheck/Surveys/Q12";
import Q13 from "./pages/ListCheck/Surveys/Q13";
import Q14 from "./pages/ListCheck/Surveys/Q14";
import Q15 from "./pages/ListCheck/Surveys/Q15";
import Q16 from "./pages/ListCheck/Surveys/Q16";
import Q17 from "./pages/ListCheck/Surveys/Q17";
import Q18 from "./pages/ListCheck/Surveys/Q18";
import Q19 from "./pages/ListCheck/Surveys/Q19";
import Q20 from "./pages/ListCheck/Surveys/Q20";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MenuPage} />
          <Route exact path="/clock" component={ClockCheck} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/shape-check" component={ShapeCheck} />
          {/* <Route exact path="/list1" component={List1} />
          <Route exact path="/list2" component={List2} />
          <Route exact path="/list3" component={List3} /> */}
          <Route exact path="/q1" component={Q1} />
          <Route exact path="/q2" component={Q2} />
          <Route exact path="/q3" component={Q3} />
          <Route exact path="/q4" component={Q4} />
          <Route exact path="/q5" component={Q5} />
          <Route exact path="/q6" component={Q6} />
          <Route exact path="/q7" component={Q7} />
          <Route exact path="/q8" component={Q8} />
          <Route exact path="/q9" component={Q9} />
          <Route exact path="/q10" component={Q10} />
          <Route exact path="/q11" component={Q11} />
          <Route exact path="/q12" component={Q12} />
          <Route exact path="/q13" component={Q13} />
          <Route exact path="/q14" component={Q14} />
          <Route exact path="/q15" component={Q15} />
          <Route exact path="/q16" component={Q16} />
          <Route exact path="/q17" component={Q17} />
          <Route exact path="/q18" component={Q18} />
          <Route exact path="/q19" component={Q19} />
          <Route exact path="/q20" component={Q20} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
