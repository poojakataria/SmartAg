// import React, { Component } from 'react';
// import Chart from 'react-apexcharts';
// import ApexCharts from 'apexcharts';


// var lastDate = 0;
//   var data = []
//   var TICKINTERVAL = 86400000
//   let XAXISRANGE = 777600000
//   function getDayWiseTimeSeries(baseval, count, yrange) {
//       var i = 0;
//       while (i < count) {
//           var x = baseval;
//           var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//           data.push({
//               x, y
//           });
//           lastDate = baseval
//           baseval += TICKINTERVAL;
//           i++;
//       }
//   }
  

//   getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
//       min: 10,
//       max: 90
//   })

//   var trigoStrength = 3
// var iteration = 11

// function getRandom() {
//   var i = iteration;
//   return (Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2)
// }

// function getRangeRandom(yrange) {
//   return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
// }

// function generateMinuteWiseTimeSeries(baseval, count, yrange) {
//   var i = 0;
//   var series = [];
//   while (i < count) {
//     var x = baseval;
//     var y = ((Math.sin(i / trigoStrength) * (i / trigoStrength) + i / trigoStrength + 1) * (trigoStrength * 2))

//     series.push([x, y]);
//     baseval += 300000;
//     i++;
//   }
//   return series;
// }

//   function getNewSeries(baseval, yrange) {
//       var newTime = baseval + 300000;
//     //   lastDate = newDate

//       for(var i = 0; i< data.length - 10; i++) {
//           // IMPORTANT
//           // we reset the x and y of the data which is out of drawing area
//           // to prevent memory leaks
//       var newTime = baseval + 300000;
//           data[i].x = newTime - 2700000 - TICKINTERVAL
//           data[i].y = 0
//       }
      
//       data.push({
//           x: newTime,
//           y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
//       })
      
//   }

//   function resetData(){
//       // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series 
//       data = data.slice(data.length - 10, data.length);
//   }


// class AirFlow extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             options: {
//               chart: {
//                   id: 'realtime',
//                   animations: {
//                     enabled: true,
//                     easing: 'linear',
//                     dynamicAnimation: {
//                       speed: 1000
//                     }
//                   },
//                   toolbar: {
//                     show: false
//                   },
//                   zoom: {
//                     enabled: false
//                   }
//                 },
//                 dataLabels: {
//                   enabled: false
//                 },
//                 stroke: {
//                   curve: 'smooth'
//                 },
//                 markers: {
//                   size: 0
//                 },
//                 xaxis: {
//                   type: 'datetime',
//                   range: 2700000,
//                 },
//                 yaxis: {
//                   max: 100
//                 },
//                 legend: {
//                   show: false
//                 }
//             },
//             series: [{
//               data: data.slice()
//             }],
//           }
//     }

//     componentDidMount() {
//         this.intervals()
//     }

//     intervals() {
        
//         window.setInterval(() => {
//             getNewSeries(new Date("12/12/2016 00:20:00").getTime(), {
//                 min: 10,
//                 max: 90
//             })

//             ApexCharts.exec('realtime', ' ', [{
//                 data: data
//             }])
//         }, 1000)
//     }

//     render() {
//         return (
//             <div>
//                 <Chart options={this.state.options} series={this.state.series} type="line"  />
//             </div>
//         )
//     }

// }

// export default AirFlow