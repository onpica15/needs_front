import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class CTRBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [
        {
          name: 'CTR',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'bar',
        },
        colors: ['#ea5455'],
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + '%'
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },

        xaxis: {
          categories: [...props.durationDays],
          position: 'bottom',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + '%'
            },
          },
        },
        title: {},
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

export default CTRBar
