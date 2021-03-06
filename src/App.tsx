import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ClockCheck from "./pages/ClockCheck/ClockCheck";
import MenuPage from "./pages/Menu/Menu";
import Result from "./pages/ResultPage/Result";
import MMSEResult from "./pages/ResultPage/MMSEResult";
import ClockResult from "./pages/ResultPage/ClockResult";
import Preventive from "./pages/Preventive/Preventive";
import Preventive2 from "./pages/Preventive/Preventive2";
import Preventive3 from "./pages/Preventive/Preventive3";

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

import UserInput from "./pages/MMSECheckList/Surveys/userInput";
import UserInput2 from "./pages/MMSECheckList/Surveys/userInput2";
import MQ1 from "./pages/MMSECheckList/Surveys/MQ1";
import MQ2 from "./pages/MMSECheckList/Surveys/MQ2";
import MQ3 from "./pages/MMSECheckList/Surveys/MQ3";
import MQ4 from "./pages/MMSECheckList/Surveys/MQ4";
import MQ5 from "./pages/MMSECheckList/Surveys/MQ5";
import MQ6 from "./pages/MMSECheckList/Surveys/MQ6";
import MQ7 from "./pages/MMSECheckList/Surveys/MQ7";
import MQ8 from "./pages/MMSECheckList/Surveys/MQ8";
import MQ9 from "./pages/MMSECheckList/Surveys/MQ9";
import MQ10 from "./pages/MMSECheckList/Surveys/MQ10";
import MQ11 from "./pages/MMSECheckList/Surveys/MQ11";
import MQ12 from "./pages/MMSECheckList/Surveys/MQ12";
import MQ13 from "./pages/MMSECheckList/Surveys/MQ13";
import MQ14 from "./pages/MMSECheckList/Surveys/MQ14";
import MQ15 from "./pages/MMSECheckList/Surveys/MQ15";
import MQ16 from "./pages/MMSECheckList/Surveys/MQ16";
import MQ17 from "./pages/MMSECheckList/Surveys/MQ17";
import MQ18 from "./pages/MMSECheckList/Surveys/MQ18";
import MQ19 from "./pages/MMSECheckList/Surveys/MQ19";
import MQ20 from "./pages/MMSECheckList/Surveys/MQ20";
import MQ21 from "./pages/MMSECheckList/Surveys/MQ21";
import MQ22 from "./pages/MMSECheckList/Surveys/MQ22";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MenuPage} />
          <Route exact path="/clock" component={ClockCheck} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/mmse_result" component={MMSEResult} />
          <Route exact path="/clock_result" component={ClockResult} />
          <Route exact path="/userInput" component={UserInput} />
          <Route exact path="/userInput2" component={UserInput2} />
          <Route exact path="/preventive" component={Preventive} />
          <Route exact path="/preventive2" component={Preventive2} />
          <Route exact path="/preventive3" component={Preventive3} />
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
          <Route exact path="/mq1" component={MQ1} />
          <Route exact path="/mq2" component={MQ2} />
          <Route exact path="/mq3" component={MQ3} />
          <Route exact path="/mq4" component={MQ4} />
          <Route exact path="/mq5" component={MQ5} />
          <Route exact path="/mq6" component={MQ6} />
          <Route exact path="/mq7" component={MQ7} />
          <Route exact path="/mq8" component={MQ8} />
          <Route exact path="/mq9" component={MQ9} />
          <Route exact path="/mq10" component={MQ10} />
          <Route exact path="/mq11" component={MQ11} />
          <Route exact path="/mq12" component={MQ12} />
          <Route exact path="/mq13" component={MQ13} />
          <Route exact path="/mq14" component={MQ14} />
          <Route exact path="/mq15" component={MQ15} />
          <Route exact path="/mq16" component={MQ16} />
          <Route exact path="/mq17" component={MQ17} />
          <Route exact path="/mq18" component={MQ18} />
          <Route exact path="/mq19" component={MQ19} />
          <Route exact path="/mq20" component={MQ20} />
          <Route exact path="/mq21" component={MQ21} />
          <Route exact path="/mq22" component={MQ22} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
