import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Service from "./components/service/Service";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";
import Tile from './components/tile/tile';
import Nav from "./components/navigation/Nav";

function App() {

  return (
    <div>
        <Nav/>
      <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path="/about-us">
              <About/>
          </Route>
          <Route path="/services">
              <Service/>
          </Route>
          <Route path="/team">
              <Team/>
          </Route>
          <Route path="/contact">
              <Contact/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
