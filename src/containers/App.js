import React, { Component } from 'react';
import { Route } from "react-router-dom";
import moment from 'moment';

import Contact from '../components/Contact/Contact'
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar';
import Work from '../components/Work/Work';
import './App.scss';

class App extends Component {

  render() {
    const current_date = moment().format('ll');

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="content">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </body>
        <footer>
          <ul className="list-inline">
          <li>&copy; {current_date}</li>
          <li><a href="https://www.linkedin.com/in/brandonbeschta/" className="fab fa-linkedin"></a></li>
          <li><a href="https://github.com/BeschtaBrandon" className="fab fa-github"></a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;