import React, {Component} from 'react';
import Chart from 'react-apexcharts';

class Rainfall extends Component{
    constructor(props){
        super(props);

        this.state = {
            options: {
              labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              theme: {
                monochrome: {
                  enabled: true
                }
              },
              title: {
                text: "Rainfall %"
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
            series: [25, 15, 44, 55, 41, 17],
          }
    }

    render(){
        return(
            <div>
                <Chart options={this.state.options} series={this.state.series} type="pie" />
            </div>
        )
    }
}

export default Rainfall;