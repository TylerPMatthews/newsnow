import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Intro from "./components/intro/Intro";
import Sarticles from './components/Sarticles';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/sarticles'>
          <Sarticles />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Intro />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
