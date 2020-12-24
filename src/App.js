import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Sarticles from "./components/Sarticles";
import Intro from './components/intro/Intro';
function App() {
  return (
    <div>
      <Switch>
       
        <Route path='/home'>
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
