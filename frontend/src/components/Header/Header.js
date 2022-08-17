import React, { Component } from 'react'
import { Button, Modal, Tabs, Tab, Form, Image, Row, Col } from 'react-bootstrap';
import '../../App.css';
import Cookies from 'js-cookie';
import axios from 'axios';


export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: false,
            modalShow: false,
            modalSignUp: false,
            email: "",
            password: "",
            name: "",
            newEmail: "",
            newPassword: "",
            city: "",
            state: "",
            zip: "",
            userType: "Farmer",
            successSignup: false,
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.newEmailhandler = this.newEmailhandler.bind(this);
        this.newPasswordHandler = this.newPasswordHandler.bind(this);
        this.cityHandler = this.cityHandler.bind(this);
        this.stateHandler = this.stateHandler.bind(this);
        this.zipHandler = this.zipHandler.bind(this);
    }

    handleOpen() {
        if (Cookies.get('session') === "true") {
            // Add: Logout changes goes here
            // this.setState({
            //     session: false,
            //     modalShow: false,
            // })
            Cookies.set('session', false);
            Cookies.set("showDashboard", false)
            this.props.history.push("/Home")
        }
        else {
            this.setState({
                modalShow: true
            })
        }
    }

    handleSignup() {
        if (this.state.session) {
            this.setState({
                session: false,
                modalSignup: false
            })
            this.props.history.push("/home")

        }
        else {
            this.setState({
                modalSignUp: true
            })
        }
    }
    handleClose() {
        this.setState({
            modalShow: false,
            modalSignUp: false,
            successLogin: false,
            successSignup: false
        })
    }

    emailHandler = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    passwordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }


    nameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    newEmailhandler = (e) => {
        this.setState({
            newEmail: e.target.value
        })
    }

    newPasswordHandler = (e) => {
        this.setState({
            newPassword: e.target.value
        })
    }

    cityHandler = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    stateHandler = (e) => {
        this.setState({
            state: e.target.value
        })
    }

    zipHandler = (e) => {
        this.setState({
            zip: e.target.value
        })
    }

    loginHandler = (e) => {
        // var headers = new Headers();

        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        Cookies.set('session', true)
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/login', data)
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    console.log("here");
                    console.log(response.data);
                    if (response.data.error === 'User Not Found') {
                        this.setState({
                            show: true,
                            email: '',
                            password: ''
                        })
                    }
                    else {
                        Cookies.set("name", response.data.userName)
                        this.props.history.push('/User');
                    }
                }



            });
    }
    submitNewUser = (e) => {
        // var headers = new Headers();

        e.preventDefault();
        const data = {
            name: this.state.name,
            newEmail: this.state.newEmail,
            newPassword: this.state.newPassword,
            city: this.state.city,
            zip: this.state.zip,
            state: this.state.state,
            userType: this.state.userType
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/signup', data)
            .then(response => {
                console.log("Status Code : ", response);
                if (response.status == 200) {
                    this.setState({
                        modalSignUp: false,
                        successSignup: true
                    })
                    setInterval(() => {
                        this.setState({
                            successSignup: false
                        })
                    }, 2000);
                } else {
                    this.setState({
                        authFlag: false
                    })
                }

            });
    }


    render() {
        return (
            <div className="headerdiv">
                <Image src="http://localhost:3000/logo.png" width="500px" height="70px" />
                <div className="loginmodalbutton">

                    {(Cookies.get('session') === "true") ?
                        <span>
                            Welcome , {Cookies.get('name')} &nbsp; &nbsp;&nbsp;
                     <Button variant="success" onClick={this.handleOpen}>Logout</Button>
                        </span> :
                        <span>
                            <Button variant="success" onClick={this.handleOpen}>Login</Button>
                            <Button variant="link" className="linkColor" onClick={this.handleSignup}>New Customer? SignUp Here</Button></span>
                    }


                </div>
                <Modal show={this.state.modalShow && !(Cookies.get('session') === "true")} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="headermodal" onSubmit={this.loginHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" value={this.state.email} placeholder="Enter email" onChange={this.emailHandler} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" value={this.state.password} placeholder="Password" onChange={this.passwordHandler} required />
                            </Form.Group>
                            {this.state.show ?
                                <Row className="justify-content-md-center">
                                    <span style={{ color: 'red' }}>
                                        Incorrect login details. Please enter correct login information
                            </span>
                            <br/>
                                </Row>

                                : null}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.modalSignUp && !this.state.session} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.submitNewUser}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control onChange={this.nameHandler} name="name" type="text" placeholder="Name" required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="newEmail" onChange={this.newEmailhandler} required />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="newPassword" onChange={this.newPasswordHandler} required />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" name="City" onChange={this.cityHandler} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" onChange={this.stateHandler} required>
                                        <option></option>
                                        <option>California</option>
                                        <option>Colarado</option>
                                        <option>Nevada</option>
                                        <option>Utah</option>
                                        <option>Newyork</option>
                                        <option>Ohio</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="number" placeholder="ZipCode" name="zip" onChange={this.zipHandler} required />
                                </Form.Group>

                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Sign me up as a Farmer
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Modal className="success-modal" show={this.state.successSignup} onHide={this.handleClose}>
                    <Modal.Body>Your Profile has been created. Please proceed to Login.</Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default Header
