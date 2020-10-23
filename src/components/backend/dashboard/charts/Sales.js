import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BrowseChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'salesChart',
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
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#ea5455'],
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
          name: '訂單量',
          data: [
            {
              x: new Date('2020-11-14').getTime(),
              y: 10,
            },
            {
              x: new Date('2020-11-15').getTime(),
              y: 15,
            },
            {
              x: new Date('2020-11-16').getTime(),
              y: 7,
            },
            {
              x: new Date('2020-11-17').getTime(),
              y: 12,
            },
            {
              x: new Date('2020-11-18').getTime(),
              y: 3,
            },
            {
              x: new Date('2020-11-19').getTime(),
              y: 16,
            },
            {
              x: new Date('2020-11-20').getTime(),
              y: 8,
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
            <div className="circle-icon icon-sale">
              <i className="fas fa-cart-plus"></i>
            </div>
            <div className="chart-figures">+ 71</div>
            <div className="chart-title">訂單數</div>
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
