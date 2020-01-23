import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const DonutChart = () => {
  const [dataDoughnut, setData] = useState({ labels: [], datasets: [] });
  useEffect(() => {
    loadData();
    // const stateUpdate = setInterval(loadData, 5000);
    // return () => {
    //   clearInterval(stateUpdate);
    // };
  }, []);

  const loadData = () => {
    setData({
      labels: [
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
      ],
      datasets: [
        {
          data: [6.2, 7.8, 6.9, 8.0, 8.4],
          backgroundColor: [
            '#F7464A',
           
          ],
          hoverBackgroundColor: [
            '#FF5A5E',
           
          ]
        }
      ]
    });
  };


  const LineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
    xAxes: [{
        barPercentage: 1,
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        }
    }],
    yAxes: [{
        gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
        beginAtZero: true
        }
    }]
    }
}

  return (
    <div className='chart-wrapper'>
      <Line
      type="horizontalBar"
        data={dataDoughnut}
        height={350}
        width={400}
        options={LineChartOptions}
      />
    </div>
  );
};

export default DonutChart;
