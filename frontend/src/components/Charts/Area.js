import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class Area extends Component{
    constructor(props){
        super(props);

        this.state = {
            options: {
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
  
  
              xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
                  "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
                  "2018-09-19T06:30:00"
                ],
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              }
            },
            series: [{
              name: 'series1',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'series2',
              data: [11, 32, 45, 32, 34, 52, 41]
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

export default Area;