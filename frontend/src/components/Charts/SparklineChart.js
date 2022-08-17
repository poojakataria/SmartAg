import React, {Component} from 'react';
import Chart from 'react-apexcharts';

window.Apex = {
    stroke: {
      width: 3
    },
    markers: {
      size: 0
    },
    tooltip: {
      fixed: {
        enabled: true,
      }
    }
  };

  var randomizeArray = function (arg) {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // data for the sparklines that appear below header area
  var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

class SparklineChart extends Component{
    constructor(props){
        super(props);

        this.state = {
            seriesTopSpark1: [{
              data: randomizeArray(sparklineData)
            }],
            seriesTopSpark2: [{
              data: randomizeArray(sparklineData)
            }],
            seriesTopSpark3: [{
              data: randomizeArray(sparklineData)
            }],
            seriesSpark1: [{
              data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
            }],
            seriesSpark2: [{
              data: [47, 45, 74, 14, 56, 74, 14, 11, 7, 39, 82]
            }],
            seriesSpark3: [{
              data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
            }],
            seriesSpark4: [{
              data: [15, 75, 47, 65, 14, 2, 41, 54, 4, 27, 15]
            }],
            chartOptionsTopSpark1: {
              chart: {
                sparkline: {
                  enabled: true
                },
              },
              colors: ['#DCE6EC'],
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3,
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              yaxis: {
                min: 0
              },
              title: {
                text: '$135,965',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              },
              subtitle: {
                text: 'Profits',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              }
            },
            chartOptionsTopSpark2: {
              chart: {
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              yaxis: {
                min: 0
              },
              title: {
                text: '$235,312',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              },
              subtitle: {
                text: 'Expenses',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              }
            },
            chartOptionsTopSpark3: {
              chart: {
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3,
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              yaxis: {
                min: 0
              },
              title: {
                text: '$424,652',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              },
              subtitle: {
                text: 'Sales',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                  cssClass: 'apexcharts-yaxis-title'
                }
              }
            },
            chartOptionsSparkLine: {
              chart: {
                height: 35,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '80%'
                }
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            }
          }
    }

    render(){
        return(
            <div id="sparklines">
            <div className="row">
              <div className="col-md-4">
                <div id="spark1">
                  <Chart options={this.state.chartOptionsTopSpark1} series={this.state.seriesTopSpark1} type="area" height="160" />
                </div>
              </div>
              <div className="col-md-4">
                <div id="spark2">
                  <Chart options={this.state.chartOptionsTopSpark2} series={this.state.seriesTopSpark2} type="area" height="160" />
                </div>
              </div>
              <div className="col-md-4">
                <div id="spark3">
                  <Chart options={this.state.chartOptionsTopSpark3} series={this.state.seriesTopSpark3} type="area" height="160" />
                </div>
              </div>
            </div>

            <div className="row">
              <table>
                <thead>
                  <th>Total Value</th>
                  <th>Percentage of Portfolio</th>
                  <th>Last 10 days</th>
                  <th>Volume</th>
                </thead>
                <tbody>
                  <tr>
                    <td>$32,554</td>
                    <td>15%</td>
                    <td>
                      <div id="chart1">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark1} type="line" height="35" width="100" />
                      </div>
                    </td>
                    <td>
                      <div id="chart5">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark1} type="bar" height="35" width="100" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$23,533</td>
                    <td>7%</td>
                    <td>
                      <div id="chart2">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark2} type="line" height="35" width="100" />
                      </div>
                    </td>
                    <td>
                      <div id="chart6">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark2} type="bar" height="35" width="100" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$54,276</td>
                    <td>9%</td>
                    <td>
                      <div id="chart3">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark3} type="line" height="35" width="100" />
                      </div>
                    </td>
                    <td>
                      <div id="chart7">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark3} type="bar" height="35" width="100" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>$11,533</td>
                    <td>2%</td>
                    <td>
                      <div id="chart4">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark4} type="line" height="35" width="100" />
                      </div>
                    </td>
                    <td>
                      <div id="chart8">
                        <Chart options={this.state.chartOptionsSparkLine} series={this.state.seriesSpark3} type="bar" height="35" width="100" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
    }
}

export default SparklineChart;