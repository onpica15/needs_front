import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RevenueChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'revenueChart',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 5,
          dashArray: [0, 10],
        },
        colors: ['#fdf497', '#bbb'],
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: ['gradient', 'solid'],
          gradient: {
            shade: 'dark',
            gradientToColors: ['#d6249f'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        legend: {
          show: false,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value + 'k'
            },
          },
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          type: 'datetime',
          categories: [
            new Date('2020-11-01').getTime(),
            new Date('2020-11-05').getTime(),
            new Date('2020-11-09').getTime(),
            new Date('2020-11-13').getTime(),
            new Date('2020-11-17').getTime(),
            new Date('2020-11-21').getTime(),
            new Date('2020-11-25').getTime(),
            new Date('2020-11-29').getTime(),
          ],
        },
      },
      series: [
        {
          name: '本月',
          data: [45.0, 47.0, 44.8, 47.5, 45.5, 48.5, 46.5, 48.6],
        },
        {
          name: '上個月',
          data: [45.0, 48.0, 45.5, 46.6, 44.5, 46.0, 45.5, 47.0],
        },
      ],
    }
  }

  render() {
    return (
      <>
        <div className="chart-card revenue">
          <div className="revenue-title">本週收入</div>
          <div className=" monthly-income mr-5">
            <div className="month-title">本月</div>
            <sup className="font-medium-1">$</sup>
            <span className="this-month-income">86,589</span>
          </div>
          <div className="monthly-income mr-5">
            <div className="month-title">上個月</div>
            <sup className="font-medium-1">$</sup>
            <span className="last-month-income">73,683</span>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              height="280"
            />
          </div>
        </div>
      </>
    )
  }
}

export default RevenueChart
