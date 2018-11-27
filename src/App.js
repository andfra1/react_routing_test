import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Index</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <Route exact path='/' component={Index}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
        </div>
      </Router>
        
    );
  }
}

export default App;
