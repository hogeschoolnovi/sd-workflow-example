import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Switch, Route} from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";

function App() {

  return (
    <div>
        <Header/>
      <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path="/about-us">
              <About/>
          </Route>
          <Route path="/services">
              <Services/>
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
