import * as React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Mainpage from "./mainpage";
import Appadmob from "./appadmob";
import Pivalidation from "./pivalidation";
import Error from "./component/error";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/app-ads.txt" component={Appadmob} />
        <Route exact path="/validation-key.txt" component={Pivalidation} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
