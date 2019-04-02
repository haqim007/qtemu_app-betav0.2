import React, { Component } from 'react';
import NavBar from './Navbar';
import Content from './Content';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Content /> 
            </React.Fragment>
        );
    }
}

export default Home;
