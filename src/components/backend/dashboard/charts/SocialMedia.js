import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class SocialMediaChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'socialMediaBar',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#7367f0'],
        yaxis: {
          show: false,
        },
        xaxis: {
          type: 'datetime',
          labels: {
            show: false,
          },
          crosshairs: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        grid: {
          show: false,
          padding: {
            top: -30,
            left: 0,
            right: 0,
            bottom: -30,
          },
        },
        tooltip: {
          x: {
            // show: false
          },
          enabled: true,
          formatter: undefined,
          offsetY: 0,
        },
      },
      series: [
        {
          name: '訂閱用戶',
          data: [
            {
              x: new Date('2020-11-14').getTime(),
              y: 28,
            },
            {
              x: new Date('2020-11-15').getTime(),
              y: 40,
            },
            {
              x: new Date('2020-11-16').getTime(),
              y: 36,
            },
            {
              x: new Date('2020-11-17').getTime(),
              y: 52,
            },
            {
              x: new Date('2020-11-18').getTime(),
              y: 38,
            },
            {
              x: new Date('2020-11-19').getTime(),
              y: 60,
            },
            {
              x: new Date('2020-11-20').getTime(),
              y: 55,
            },
          ],
        },
      ],
    }
  }

  render() {
    return (
      <>
        <div className="chart-card">
          <div className="chart-card-header">
            <div className="circle-icon icon-social">
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="chart-figures">+ 309</div>
            <div className="chart-title">粉絲人數</div>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height="100"
            />
          </div>
        </div>
      </>
    )
  }
}

export default SocialMediaChart
