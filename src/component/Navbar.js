import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import MyButton from './reuse/myButton';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#home"><b>QTemu</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#create_meetup">Create Meetup</Nav.Link>
                        <Nav.Link href="#explore">Explore</Nav.Link>
                        {/* <Nav.Link href="/about/haqim">Redux</Nav.Link>  */}
                        <Link to="/about/haqim"><Button variant="primary"> Redux </Button> </Link>                       
                    </Nav> 
                    <Link to="/login"><Button variant="primary"> Login </Button> </Link>
                    {/* <MyButton variant="primary" link="/login" text="Login"></MyButton>                                      */}
                </Navbar.Collapse>                
            </Navbar>
        )
    }
}

export default NavBar;