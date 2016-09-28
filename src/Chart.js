import React, { Component } from 'react';
var Highcharts = require('highcharts');

class Chart extends Component {

  componentDidMount() {
    this.chart = new Highcharts.Chart(this.props.container, this.props.options);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div id={this.props.container} />
  }
}

export default Chart;
