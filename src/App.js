import React, {Component} from 'react';
import Navbar from './components/UI/NavBar';
import LandingPage from './components/UI/landingpage/LandingPage';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div >

        <Router>
        <Navbar/>
          <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />


          </Switch>

          </div>
        </Router>


    </div>
    );
  }
}

export default App;
