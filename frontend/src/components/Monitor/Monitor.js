import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col, Dropdown, Button, Alert, Card, CardDeck,CardColumns, Image } from 'react-bootstrap';
import LineChart from '../Charts/LineChart';
import GaugeChart from 'react-gauge-chart';
import Temperature from '../Charts/Temperature';
import Humidity from '../Charts/Humidity';
import SparklineChart from '../Charts/SparklineChart';
import SimpleMap from '../Charts/SimpleMap';
import PrecipitationChart from '../Charts/PrecipitationChart';
import AirFlow from '../Charts/AirFlow';
import Nutrition from '../Charts/Nutrition';
import Moisture from '../Charts/SoilMoisture';
import Rainfall from '../Charts/Rainfall';
import Wetness from '../Charts/Wetness';
import Cookies from 'js-cookie';
import Area from '../Charts/Area';

const options = {
    series: [
        {
            name: 'Profit',
            data: [100, 200, 30, 100, 30, 50, 100]
        }
    ]
}

class Monitor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edgestations: ['A', 'B', 'C'],
            selectedStation: "",
            nrOfLevels: 20,
            percent: 0.35
        }

        this.edgestationHandler = this.edgestationHandler.bind(this)
        this.generateTempData = this.generateTempData.bind(this)
    }

    componentDidMount() {
        this.generateTempData()
    }

    edgestationHandler = (e) => {
        e.preventDefault()
        console.log("target ", e.target)
        console.log("target  value", e.target.value)
        this.setState({
            selectedStation: e.target.value
        })

    }

    generateTempData = () => {
        setInterval(() => {
            this.setState({
                percent: Math.random() / 2
            })
        }, 1500)
    }

    render() {
        console.log("selected", Cookies.get("showDashboard"))
        const options = []
        options.push(<option value=''>Select a edgestation</option>)
        for (let station in this.state.edgestations) {
            options.push(<option value={station}>{station}</option>)
        }

        if(Cookies.get("showDashboard") === "true"){
        return (
            
            <Container className="dashboardContainer">
            <br />
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"
                    defaultValue={this.state.selected} onChange={this.edgestationHandler}>
                    Machine A
                    </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br />
            <div className="dashboardDivScrollable">
                <CardDeck>
                    <Card>
                        <Card.Header as="h5">Speed</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <GaugeChart id="speed-chart"
                                    nrOfLevels={20}
                                    percent={this.state.percent}
                                    textColor={'#5BE12C'}
                                    hideText={true}
                                />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Temperature</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Temperature />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Location</Card.Header>
                        <Card.Body>
                            <Card.Text>
                            <Image src="http://localhost:3000/Ranch.jpg" width="380px" height="270px" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
                <br />
                <Alert variant="success">
                    <Alert.Heading>Real Time Sensor Data</Alert.Heading>
                </Alert>
                <CardColumns>
                    <Card>
                        <Card.Header as="h5">Humidity</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Humidity></Humidity>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Precipitation</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <PrecipitationChart></PrecipitationChart>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Wetness Level</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Wetness></Wetness>
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                    {/* <Card>
                        <Card.Header as="h5">AirFlow</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <AirFlow></AirFlow>
                            </Card.Text>
                        </Card.Body>
                    </Card> */}
                   </CardColumns>
                   <CardColumns>
                   <Card>
                        <Card.Header as="h5">Soil Nutrition Level</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Area></Area>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                  <Card>
                        <Card.Header as="h5">Soil Moisture Level</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Moisture></Moisture>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header as="h5">Rainfall</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Rainfall></Rainfall>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardColumns>
                    
               
            </div>
        </Container>
       
        )}
        else{
            return(
                <Container className="dashboardContainer">
                <div className="dashboardDivScrollable">
                <br />
            <Alert variant="success">
                <Alert.Heading>Please add Services to view Sensor Information</Alert.Heading>
            </Alert>
            </div>

            </Container>                     
            )
        }
    }
}
export default Monitor;