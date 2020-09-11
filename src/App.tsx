import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Replay from "./components/Replay";
import Record from "./components/Record";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/record">Record</Link>
        </li>
        <li>
          <Link to="/replay">Replay</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/record" component={Record}></Route>
        <Route exact path="/replay" component={Replay}></Route>
        <Redirect exact to="/record" from="/" />
      </Switch>
    </Router>
  );
}

export default App;
