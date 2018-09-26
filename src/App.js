import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch  } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
return (
  <Router>
      <div className="App">
        <Navigation />
          <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route path='/about' component={About}></Route>
                  <Route exact path='/users' component={Users}></Route>
                </Switch>
      </div>
        </Router>
    )


  }
}



export default App;
