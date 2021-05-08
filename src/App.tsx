import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClockCheck from "./pages/ClockCheck/ClockCheck";
import ListCheck from "./pages/ListCheck/ListCheck";
import MenuPage from "./pages/Menu/Menu";
import Result from "./pages/ResultPage/Result";
import ShapeCheck from "./pages/ShapeCheck/ShapeCheck";
import TmTest from "./pages/TmTest";
import CalcScore from "./pages/ListCheck/CalcScore";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MenuPage} />
          <Route exact path="/tm" component={TmTest} />
          <Route exact path="/clock" component={ClockCheck} />
          <Route exact path="/list-check" component={ListCheck} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/shape-check" component={ShapeCheck} />
          <Route exact path="/depress-result" component={CalcScore} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
