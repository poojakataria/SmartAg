import React, {Component} from "react";
import Chart from 'react-apexcharts';

class Humidity extends Component{
    constructor(props){
        super(props);

        this.state = {
            options: {
              chart: {
                toolbar: {
                  show: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                  hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#fff',
                    position: 'front',
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24
                    }
                  },
                  track: {
                    background: '#fff',
                    strokeWidth: '67%',
                    margin: 0, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35
                    }
                  },
  
                  dataLabels: {
                    name: {
                      offsetY: -10,
                      show: true,
                      color: '#888',
                      fontSize: '17px'
                    },
                    value: {
                      formatter: function (val) {
                        return parseInt(val);
                      },
                      color: '#111',
                      fontSize: '36px',
                      show: true,
                    }
                  }
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#ABE5A1'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ['Humidity'],
            },
            series: [75],
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
                <Chart options={this.state.options} series={this.state.series} type="radialBar" width="370" />
            </div>
        )
    }
}


export default Humidity;