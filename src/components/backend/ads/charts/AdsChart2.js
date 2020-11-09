import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class AdsChart2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [16, 10, 20],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        colors: ['#fff', '#E5C6A0', '#fff'],
        fill: {
          opacity: 0.85,
        },
        stroke: {
          width: 4,
        },
        labels: [
          'LABAN CAMBRIDGE 劍橋鋼筆',
          '【Uptrend My diary ｜超級空白手帳 VII】',
          '【HIGHTIDE】2021方格週記事手帳B6 ‧ 皮革綁線茶',
        ],
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#787878'],
          },
          background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
        legend: {
          show: false,
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
          type="pie"
          width={'100%'}
        ></Chart>
      </>
    )
  }
}

export default AdsChart2
