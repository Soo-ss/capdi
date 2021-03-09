import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/total1" component={Total} /> */}
          {/* <Route path="/total2" component={Total} /> */}
          {/* <Route path="/total3" component={Total} /> */}
          {/* <Route path="/total4" component={Total} /> */}
          {/* <Route path="/total5" component={Total} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
