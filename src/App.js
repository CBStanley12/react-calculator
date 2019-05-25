import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "0",
      equation: ""
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Calculator Application</h1>
        </header>
      </div>
    );
  }
}

export default Calculator;
