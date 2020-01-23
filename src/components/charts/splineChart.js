import React, {Component} from 'react';

import { Line } from 'react-chartjs-2';

import './splineChart.css'

const data = {
  labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,2017,2018,2019],
  datasets: [
    {
      label: 'RESULT ANALYSIS',
      fill: false,
      lineTension: 0.2,
      backgroundColor: 'rgb(243, 216, 243)',
      borderColor: 'blue',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [8.3, 7.4, 8.2, 10.2, 5.0, 6.3, 8.3, 7.8,9.2,4.3,11.3]
    },
  
  ]
};

export default class graph extends Component {
  render() {
    return (
		<div className="graph">
        <Line ref="chart"className="line" data={data} />
      </div>
    );
  }


}