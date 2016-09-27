import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Highcharts + React component</h2>
        </div>
        <div className="App-body">
        <Chart />
       </div>
      </div>
    );
  }
}

export default App;
