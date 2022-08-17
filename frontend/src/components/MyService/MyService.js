import React, { Component } from 'react';
import { Container, Row, Col, Table, Dropdown, Button, Alert, Modal, Form, } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Cookies from 'js-cookie';


class MyService extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableShow: true,
            endDate: new Date(),
            modalShow: false,
            successUpdate: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.UpdateService = this.UpdateService.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
    }


    UpdateService() {
        Cookies.set('showDashboard', true)
        this.setState(
            {
                modalShow: true
            }
        )
    }

    handleClose() {
        this.setState({
            modalShow: false,
            successUpdate:true
        })

        setInterval(() => {
            this.setState({
                successUpdate:false
            })
        }, 2000);

    
    }

    handleDelete() {
        this.setState({
            tableShow: false
        })
    }

    handleChange = (date) => {
        this.setState(
            {
                endDate:date
            }
        )
    }

    render() {
        return (
            <Container className="dashboardContainer">
                <br />
                <Alert variant="success">
                    <Alert.Heading>Manage Edge Stations</Alert.Heading>
                </Alert>

                {this.state.tableShow ?
                    <div className="dashboardDivScrollable">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Edge Station</th>
                                    <th>Ranch Name</th>
                                    <th>Sensors</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>EdgeStation A</td>
                                    <td>Ranch 1</td>
                                    <td>Soil Moisture,Precipitation, Weather, Humidity, Airflow, Soil Wetness</td>
                                    <td>Nov-17-2019</td>
                                    <td>Dec-17-2019</td>
                                    <td> <Button variant="outline-success" onClick={this.UpdateService}>Update</Button>&nbsp; &nbsp;
                                        <Button variant="outline-danger" onClick={this.handleDelete}>Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div> :
                    <div className="dashboardDivScrollable">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Edge Station</th>
                                    <th>Ranch Name</th>
                                    <th>Sensors</th>
                                    <th>From Date</th>
                                    <th>To Date</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>

                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                <Modal size='lg' show={this.state.modalShow && !this.state.session} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleClose}>
                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="4">
                                    New Ranch Name
                                        </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="name" placeholder="Name Here" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPlaintextPassword">
                                <Form.Label column sm="4">
                                    New End Date
                                        </Form.Label>
                                <Col sm="8">
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Text className="text-muted">
                                        Default: Mimimum of 1 month Service
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
                                    Total Amount(Service Charge Only)
                                        </Form.Label>
                                <Col sm="8">
                                    <Form.Control plaintext readOnly defaultValue="$27.75" />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleClose}>
                                Send Request
                                </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.successUpdate} onHide={this.sendRequest}>
                    <Modal.Body>Your request has been sent successfully for admin approval</Modal.Body>
                </Modal>
            </Container>

        )
    }

}

export default MyService;