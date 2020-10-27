import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "./layouts";
import SignIn from "./layouts/SignIn";
import SelectPlan from "./layouts/SelectPlan";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/plans" component={SelectPlan} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
