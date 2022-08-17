import React, {Component} from 'react';
import Chart from 'react-apexcharts';

var ts2 = 1484418600000;
    var dates = [];
    var spikes = [5, -5, 3, -3, 8, -8]
    for (var i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
    //   var innerArr = [ts2, dataSeries[1][i].value];
    var innerArr = [ts2];
      dates.push(innerArr)
    }


class Nutrition extends Component{
    constructor(props){
        super(props)

        this.state = {
            options: {
              chart: {
                stacked: false,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              plotOptions: {
                line: {
                  curve: 'smooth',
                }
              },
              dataLabels: {
                enabled: false
              },
  
              markers: {
                size: 0,
                style: 'full',
              },
              //colors: ['#0165fc'],
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              yaxis: {
                labels: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                  },
                },
                title: {
                  text: 'Price'
                },
                min: 40,
                max: 240
              },
              xaxis: {
                type: 'datetime',
              },
  
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              }
            },
            series: [{
              name: 'Nutrition',
              data: dates
            }],
          }
    }

    render(){
        return(
            <div>
                <Chart options={this.state.options} series={this.state.series} type="area" />
            </div>
        )
    }
}

export default Nutrition;