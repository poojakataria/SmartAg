import React, { Component } from 'react';
import '../../App.css';
import { Nav, Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Monitor from '../Monitor/Monitor';
import MyService from '../MyService/MyService';
import ServiceRequest from '../ServiceRequest/ServiceRequest';

class User extends Component {

    constructor(props) {
        super(props);
        console.log("props inside user constructor", this.props)
    }

    render() {
        return (
            <div>
                <Router basename="/User">
                    <Container className="profileContainer">
                        <Row className="rowFull"><Header history={this.props.history}></Header></Row>
                        <Row className="rowFull">
                            <Col sm={12} className="infoContainer">
                                <Tab.Container defaultActiveKey="monitor" >
                                    <Nav variant="tabs" className="tabStyles">
                                        <Nav.Item >
                                            <Nav.Link eventKey="monitor">Dashboard</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item >
                                            <Nav.Link eventKey="myservice">My Services</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="servicerequest">Service Request</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="monitor">
                                            <Monitor />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="myservice">
                                            <MyService />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="servicerequest">
                                            <ServiceRequest />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </div>
        )
    }
}
export default User;