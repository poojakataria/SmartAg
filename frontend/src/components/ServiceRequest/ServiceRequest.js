import React, { Component } from 'react';
import { Container, Row, Col, Table, Dropdown, Button, Alert, Modal, Form, FormGroup } from 'react-bootstrap';
import Monitor from '../Monitor/Monitor';
import { FormRow } from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class ServiceRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonState: true,
            modalShow: false,
            startDate: new Date()
        }
        this.buyService = this.buyService.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleButton=this.handleButton.bind(this);
    }

    buyService() {
        this.setState(
            {
                buttonState: false,
                modalShow: true
            }
        )
    }

    handleClose() {
        this.setState({
            modalShow: false
        })
    }
//Temp
    handleButton() {
        this.setState({
            modalShow: false,
            buttonState: false
        })
    }

    handleStartDate = date => {
        this.setState({
            startDate: date
        });
    };

    handleEndDate = date => {
        this.setState({
            endDate: date
        });
    };

    render() {
        console.log(this.state.startDate)
        var endDate = new Date()
        endDate.setDate(this.state.startDate.getDate()+30)
        console.log(endDate)
        return (
            <Container className="dashboardContainer">
                <br />
                <Alert variant="success">
                    <Alert.Heading>Available Services</Alert.Heading>
                </Alert>
                <div className="dashboardDivScrollable">
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Machine Name</th>
                                <th>Edge Station</th>
                                <th>Sensor 1</th>
                                <th>Sensor 2</th>
                                <th>Sensor 3</th>
                                <th>Sensor 4</th>
                                <th>Sensor 5</th>
                                <th>Sensor 6</th>
                                <th>Price=(Service+Sensors)</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Machine A</td>
                                <td>Edge Station A</td>
                                <td>Soil Moisture</td>
                                <td>Precipitation</td>
                                <td>Weather</td>
                                <td>Humidity</td>
                                <td>Airflow</td>
                                <td>Soil Wetness</td>
                                <td>$27.75</td>
                                <td>
                                    {(this.state.buttonState) ?

                                        <Button variant="success" onClick={this.buyService} >Buy</Button> :
                                        <Button variant="success" disabled >Buy</Button>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>Machine B</td>
                                <td>Edge Station B</td>
                                <td>Weather</td>
                                <td>Humidity</td>
                                <td>Airflow</td>
                                <td>Soil Nutrition</td>
                                <td>Soil Moisture</td>
                                <td>Precipitation</td>
                                <td>$26.75</td>
                                <td>
                                    <Button variant="success">Buy</Button>
                                    &nbsp;
                                    </td>
                            </tr>
                            <tr>
                                <td>Machine C</td>
                                <td>Edge Station C</td>
                                <td>Soil Moisture</td>
                                <td>Precipitation</td>
                                <td>Weather</td>
                                <td>Soil Nurtition</td>
                                <td>Humidity</td>
                                <td>Soil Wetness</td>
                                <td>$30.75</td>
                                <td>
                                    <Button variant="success" disabled>Buy</Button>
                                    &nbsp;
                                    </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Modal size='lg' show={this.state.modalShow && !this.state.session} onHide={this.handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create New Service Request</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={this.submitNewRequest}>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">
                                        Ranch Name
                                        </Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="name" placeholder="Name Here" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">
                                        Start Date
                                        </Form.Label>
                                    <Col sm="8">
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={this.handleStartDate}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">
                                        End Date
                                        </Form.Label>
                                    <Col sm="8">
                                        <DatePicker
                                            selected= {endDate}
                                            onChange={this.handleEndDate}
                                        />
                                        <Form.Text className="text-muted">
      Default: Minimum of 1 month Service 
    </Form.Text>
                                    </Col>
                                    
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">
                                        Service Amount
                                        </Form.Label>
                                    <Col sm="8">
                                        <Form.Control plaintext readOnly defaultValue="$27.75" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formPlaintextPassword">
                                    <Form.Label column sm="4">
                                        Total Amount($50+Service)
                                        </Form.Label>
                                    <Col sm="8">
                                        <Form.Control plaintext readOnly defaultValue="$77.75" />
                                    </Col>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Need Crow Team" />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.handleButton}>
                                    Raise Request
                                </Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </Container>

        )
    }

}

export default ServiceRequest;