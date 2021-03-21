import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClockCheck from "./pages/ClockCheck/ClockCheck";
import ListCheck from "./pages/ListCheck/ListCheck";
import MenuPage from "./pages/Menu/Menu";
import Result from "./pages/ResultPage/Result";
import ShapeCheck from "./pages/ShapeCheck/ShapeCheck";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={MenuPage} />
          <Route path="/clock" component={ClockCheck} />
          <Route path="/list-check" component={ListCheck} />
          <Route path="/result" component={Result} />
          <Route path="/shape-check" component={ShapeCheck} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
