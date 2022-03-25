import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
          <Route exact path='/'>

          </Route>
          <Route path="/about-us">

          </Route>
          <Route path="/services">

          </Route>
          <Route path="/team">

          </Route>
          <Route path="/contact">

          </Route>

      </Switch>
    </div>
  );
}

export default App;
