import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VacancySign from './VacancySign.js';
import Personal    from './Personal.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      jackie : {
          "name" : "Duong Nguyen",
          "sex" : "male",
          "age" : "28"
      }
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Personal data={this.state.jackie} />
        </header>
      </div>
    );
  }
}

export default App;
