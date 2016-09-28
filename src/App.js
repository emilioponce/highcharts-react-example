import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';

class App extends Component {

  render() {

    var optionsChart1 = {
      title: {
        text: 'Example 1 of Highcharts working from a react component'
      },
      series: [{
        name: 'Evolution of Data',
        data: [1, 3, 9, 5 ,14]
      }]
    };

    var optionsChart2 = {
      title: {
        text: 'Example 2 of Highcharts working from a react component'
      },
      chart: {
        type: 'bar'
      },
      series: [{
        name: 'Evolution of Data',
        data: [3, 4, 1]
      }]
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>Highcharts + React component</h2>
        </div>
        <div className="App-body">
          <Chart options={optionsChart1} container="chart1" />
          <Chart options={optionsChart2} container="chart2" />
        </div>
      </div>
    );
  }
}

export default App;
