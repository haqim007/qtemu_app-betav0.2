import React, { Component } from 'react';
// import MyButton from './reuse/myButton';
import { Image,Row,Col,Jumbotron, Container } from 'react-bootstrap'
import BannerImage from '../assets/img/buzz.jpeg'
import axios from "axios";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



export default class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizer: ""
        };
    }

    componentDidMount() {
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                this.setState({
                    organizer: response.data.results.map((p, id) => {
                        if (id === 0) {
                            return p.name
                        }
                    })
                });
            }
            )
    }

    render() {
        return (           
            <Jumbotron fluid style={{padding:'10px'}}>
                <Container style={{margin:'10px'}}>
                    <Row>
                        <Col sm={4}>
                            <Image src={BannerImage} style={{height:'15em'}} className="rounded-circle" fluid/>
                        </Col>
                        <Col sm={8} style={{ textAlign: 'left' }}>
                            <h4>Hacktiv8 Meetup</h4>
                            <p>Location    &nbsp;&nbsp;: Jakarta, Indonesia</p>
                            <p>Members     &nbsp;&nbsp;: 1078</p>
                            <p>Organizer   &nbsp;&nbsp;: {this.state.organizer}</p>
                            {/* <MyButton variant="primary" text="Join Us"/> */}
                            <Link to="/joinUs"><Button variant="primary"> Join Us </Button></Link>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>            
        );
    }
}