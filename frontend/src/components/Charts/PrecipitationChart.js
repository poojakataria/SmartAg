import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class PrecipitationChart extends Component{
    constructor(props){
        super(props)

        this.state = {
            options: {
              plotOptions: {
                bar: {
                  dataLabels: {
                    position: 'top', // top, center, bottom
                  },
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val + "%";
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              xaxis: {
                categories: ["01-Nov", "02-Nov", "03-Nov", "04-Nov", "05-Nov", "06-Nov", "07-Nov", "08-Nov", "09-Nov", "10-Nov", "11-Nov", "12-Nov"],
                position: 'top',
                labels: {
                  offsetY: -18,
                },
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
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
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                  offsetY: -35,
                }
              },
              fill: {
                gradient: {
                  shade: 'light',
                  type: "horizontal",
                  shadeIntensity: 0.25,
                  gradientToColors: undefined,
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [50, 0, 100, 100]
                },
              },
              yaxis: {
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false,
                },
                labels: {
                  show: false,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              },
              title: {
                text: 'Monthly Precipitation in $%',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                  color: '#444'
                }
              }
            },
            series: [{
              name: 'Precipitation',
              data: [2.3, 3.1, 4.0, 10.2, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
          }
    }


    render(){
        return(
            <div>
                <Chart options={this.state.options} series={this.state.series} type="bar"/>
            </div>
        )
    }
}

export default PrecipitationChart