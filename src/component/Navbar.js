import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import MyButton from './reuse/myButton';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#home"><b>QTemu</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Create Meetup</Nav.Link>
                        <Nav.Link href="#link">Explore</Nav.Link>                        
                    </Nav> 
                    <MyButton variant="primary" text="Login"></MyButton>                                     
                </Navbar.Collapse>                
            </Navbar>
        )
    }
}

export default NavBar;