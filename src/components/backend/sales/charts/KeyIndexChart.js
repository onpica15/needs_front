import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class KeyIndexChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5],
        },
        title: {
          text: 'Page Statistics',
          align: 'left',
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              ' - ' +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ''
            )
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + ' (mins)'
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + ' per session'
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
    }
  }
  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.props.initData}
          type="line"
          height="300px"
          width="100%"
        />
      </>
    )
  }
}

export default KeyIndexChart
