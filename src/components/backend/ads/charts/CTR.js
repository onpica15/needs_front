import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class CTR extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: '曝光次數',
          data: [2048, 1520, 2513, 1682, 2130, 1408, 1982],
        },
        {
          name: '點擊次數',
          data: [101, 72, 178, 52, 113, 143, 132],
        },
      ],
      options: {
        chart: {
          type: 'bar',
          height: 350,
          //   stacked: true,
        },
        colors: ['#00cfe8', '#e8cd00'],
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff'],
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },
        title: {
          text: '過去七天',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'Noto Sans TC',
            color: '#263238',
          },
        },
        xaxis: {
          categories: [...props.durationDays].reverse(),
          labels: {
            formatter: function (val) {
              return val + '次'
            },
          },
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + '次'
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
          offsetX: 40,
        },
      },
    }
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </>
    )
  }
}

export default CTR
