import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BrowseChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'browseChart',
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
        colors: ['#28c76f'],
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
          axisBorder: {
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
            bottom: 0,
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
          name: '瀏覽次數',
          data: [
            {
              x: new Date('2020-11-14').getTime(),
              y: 159,
            },
            {
              x: new Date('2020-11-15').getTime(),
              y: 234,
            },
            {
              x: new Date('2020-11-16').getTime(),
              y: 251,
            },
            {
              x: new Date('2020-11-17').getTime(),
              y: 339,
            },
            {
              x: new Date('2020-11-18').getTime(),
              y: 142,
            },
            {
              x: new Date('2020-11-19').getTime(),
              y: 289,
            },
            {
              x: new Date('2020-11-20').getTime(),
              y: 300,
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
            <div className="circle-icon icon-brose">
              <i className="far fa-window-restore"></i>
            </div>
            <div className="chart-figures">1,714</div>
            <div className="chart-title">瀏覽人數</div>
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

export default BrowseChart
