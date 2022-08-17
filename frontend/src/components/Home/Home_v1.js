import React, { Component } from 'react';
import '../../App.css';
import { Nav, Container, Row, Col, Navbar, Image, Tabs, Tab, Carousel, Media, ListGroup, Table, Button, Card ,Alert} from 'react-bootstrap';
import Header from "../Header/Header";
import Monitor from "../Monitor/Monitor";
import { MDBSmoothScroll } from "mdbreact";

class Home extends Component {

    render() {
        return (

            <div>
                <Container className="profileContainer">
                    <Row className="rowFull"><Header history={this.props.history} /></Row>
                    <Row className="rowFull">
                        <Col sm={9} className="infoContainer">
                            <Tabs defaultActiveKey="home" id="noanim-tab-example" className="tabStyles">
                                <Tab eventKey="home" title="Home">
                                    <br />
                                    <div className="infoSection">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="slideshow"
                                                    src="http://localhost:3000/smartControl.jpg"
                                                    alt="First slide"
                                                />
                                                <Carousel.Caption >
                                                    <h1>Smart Control</h1>
                                                    <p><b>Integration of smart technologies to increase production</b></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="slideshow"
                                                    src="http://localhost:3000/smartMonitoring.jpg"
                                                    alt="Second slide"
                                                />

                                                <Carousel.Caption>
                                                    <h1>Crop Management</h1>
                                                    <p><b>Monitor your crop growth and any anomalies to effectively prevent diseases or infestations.</b></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="slideshow"
                                                    src="http://localhost:3000/smartPlanning.jpg"
                                                    alt="Third slide"
                                                />

                                                <Carousel.Caption>
                                                    <h1>Farm Monitoring</h1>
                                                    <p><b>Gain access to powerful dashboard with analytical capabilities and in-built accounting/reporting features.</b></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="slideshow"
                                                    src="http://localhost:3000/smartView.jpg"
                                                    alt="Fourth slide"
                                                />

                                                <Carousel.Caption>
                                                    <h1>Mobility</h1>
                                                    <p><b>Be able to access the information on site or remotely via a smartphone as well.</b></p>
                                                </Carousel.Caption>
                                            </Carousel.Item>
                                        </Carousel>
                                        <br />
                                    </div>
                                </Tab>
                                <Tab eventKey="about" title="About Us">
                                    <br />
                                    <div className="infoSection">
                                        <h4 >Deliver machines with smart IOT sensors, reliable monitors and controllers to help farmers yield more with less effort</h4>
                                        <br />
                                        <p>
                                            SmartAgriculture the heart of the richest agricultural region in the world. From economical low end solutions to developing technology for autonomous vehicles, we offer the control solution for most agricultural needs.
                                        <br /><br />
                                            SmartAgriculture is a cloud-based IOT-edge machine service system to provide large-scale on-demand agriculture machine services for farmers using the pay-as-you-use business model.
                                        <br /><br />
                                            We found that there was a large volume of raw data available from sensors, controllers, monitors, and other systems, but having the data in multiple locations made it hard for growers to use.
                                        <br />  <br />
                                            So we got to work, pioneering the concept of building the first solution that integrates data into a single, grower-friendly platform. SmartAgriculture is born as a unique farm management tool that displays and analyzes data from many different sources in a single, easy-to-use application. More importantly, it turns that data into valuable information, aiding growers and their trusted advisors in making sound, science-based decisions in near real-time.
                                        <br />  <br />
                                            Thank you for your interest in SmartAgriculture. We’re excited about what the future holds for our technology and what it could mean to growers, and as always, we look forward to helping you Grow Informed.
                                        </p>
                                    </div>
                                </Tab>
                                <Tab eventKey="products" title="Our Products" >
                                    <br />
                                    <h4 > Now design your machine by choosing among wide range of smart IOT based sensors.
                                     </h4>
                                    <div className="infoSectionScrollable">
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/soilMoisture.jpg"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Weather Sensors</h5>
                                                <p>To measure and record the air and soil temperature, rainfall, wetness level of crop/field, wind speed and direction, dew point temperature, solar radiation, humidity and atmospheric pressure.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/speedsensor.jpg"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Speed Sensors</h5>
                                                <p>To monitor the speed of service machine.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/gps.jpeg"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>GPS Sensors</h5>
                                                <p>To ansure precision with the use of GPS for better application of seeds, fertilizer etc.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/soilHealth.png"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Optical Sensors</h5>
                                                <p>To measure properties of the soil with the help of light. Upon installation, they help to determine moisture and contents of the soil like organic matter.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/ecsensor.png"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Electro-Chemical Sensors</h5>
                                                <p>To identify soil nutrient levels and pH by mapping soil chemical data.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/airflow.jpg"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Airflow Sensors</h5>
                                                <p>To identify the soil properties such as structure, type, moisture level by pushing a predetermined amount of air at certain depth.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                        <br />
                                        <Media>
                                            <Image
                                                width={100}
                                                height={100}
                                                className="mr-3"
                                                src="http://localhost:3000/resistance.png"
                                                alt="Generic placeholder"
                                                roundedCircle
                                            />
                                            <Media.Body>
                                                <h5>Mechanical Sensors</h5>
                                                <p>To identify the land mechanical resistance.
                                                    </p>
                                            </Media.Body>
                                        </Media>
                                    </div>
                                </Tab>
                                <Tab eventKey="services" title="Services Available" >
                                    <br />
                                    <div className="infoSection">
                                       <h4> Please Login or SignUp to avail the following Services: </h4>
                                        <br />
                                        <Row className="rowFull">
                                            <Card bg="light" style={{ width: '18rem', height: '20rem' }}>
                                                <Card.Header>Machine A</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Sensors included are:</Card.Title>
                                                    <Card.Text>
                                                        Soil Moisture<br />
                                                        Precipitation<br />
                                                        Weather<br />
                                                        Humidity<br />
                                                        Airflow<br />
                                                        Soil Wetness
                                                         </Card.Text>
                                                </Card.Body>
                                            </Card> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Card bg="light" style={{ width: '18rem', height: '20rem' }}>
                                                <Card.Header>Machine B</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Sensors included are:</Card.Title>
                                                    <Card.Text>
                                                        Weather<br />
                                                        Humidity<br />
                                                        Airflow<br />
                                                        Soil Nutrition<br />
                                                        Soil Moisture<br />
                                                        Precipitation
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                         <Card bg="light" style={{ width: '18rem', height: '20rem' }}>
                                                <Card.Header>Machine C</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>Sensors included are: </Card.Title>
                                                    <Card.Text>
                                                        Soil Moisture<br />
                                                        Precipitation<br />
                                                        Weather<br />
                                                        Soil Nutrition<br />
                                                        Humidity<br />
                                                        Soil Wetness
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Row>
                                    </div>

                                </Tab>
                            </Tabs>
                        </Col>

                        <Col sm={2} >
                            <div className="newsSection">
                                <h3>News & Updates</h3>
                                <div className="ab">
                                    <marquee behavior="scroll" direction="up" scrollamount="2" height="350" bgcolor="white">

                                        Smart Ag secures $5 million investment from Stine Seed for driverless tractor technology<br /> <br />
                                        Largest private seed company in United States makes investment in Smart Ag and the first platform for autonomous agricultural machinery<br /><br />
                                        Automotive Sensors Market is Thriving Worldwide with Smart Key Players Continental AG, Robert Bosch GmbH<br /><br />
                                        Global Smart Bridges Market Growth Analysis, Forecasts to 2025 – Siemens AG, IBM Corporation, Honeywell International Inc., Cisco Systems Inc<br /><br />
                                        Smart Agriculture Market-Global and Regional Analysis by Top Key Industry Players, Key Regions, Product Segments, and Applications 2025<br /><br />
                                        Global Smart Textiles for Wearable Technology Market Technology Updates 2019<br />

                                    </marquee>
                                </div>
                            </div>
                            <div className="Contact">
                                <h3>Contact Us</h3>
                                <p>San Jose State University <br/>
                                    1 Washington Sq, San Jose, CA 95192</p>                                
                            </div>



                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;