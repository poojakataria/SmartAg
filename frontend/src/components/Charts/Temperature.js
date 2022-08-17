import React, {Component} from "react";
import Chart from 'react-apexcharts';

class Temperature extends Component{
    constructor(props){
        super(props);

        this.state = {
            options: {
              chart: {
                offsetY: -10
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  dataLabels: {
                    name: {
                      fontSize: '16px',
                      color: undefined,
                      offsetY: 120
                    },
                    value: {
                      offsetY: 76,
                      fontSize: '22px',
                      color: undefined,
                      formatter: function (val) {
                        return val + " °F";
                      }
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  shadeIntensity: 0.15,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 65, 91]
                },
              },
              stroke: {
                dashArray: 4
              },
              labels: ['Temperature']
            },
            series: [67],
          }

          this.generateRandomData = this.generateRandomData.bind(this)
    }

    componentDidMount(){
        this.generateRandomData()
    }

    generateRandomData = () => {
        let max = 70
        let min = 80
        setInterval(() => {
            let val = Math.floor(Math.random() * (max - min + 1) + min)
            this.setState({
                series: [val]
            })
        }, 1500)
    }

    render(){
        return (
            <div>
                <Chart options={this.state.options} series={this.state.series} type="radialBar" width="380" />
            </div>
        )
    }
}


export default Temperature;