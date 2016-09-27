import React, { Component } from 'react';
var Highcharts = require('highcharts');


// TWO IMPROVEMENTS
// 1. OPTIONS from outside
// 2. DOM render element must be unic

class Chart extends Component {

  componentDidMount() {
    var options = {
      title: {
           text: 'Example of Highcharts working from a react component'
       },
      chart: {
        renderTo: 'chart',
        type: 'line'
      },
      series: [{
        name: 'Evolution of Data',
        data: [1, 3, 9, 5 ,14]
      }]
    };
    this.chart = new Highcharts.Chart(options);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div id="chart" />
  }
}

export default Chart;
