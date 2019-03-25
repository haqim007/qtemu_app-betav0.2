import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export default class NextMeetup extends Component {

    constructor(props){
        super(props)
        this.state = {
            people: ""
        }
    }

    componentDidMount(){
        axios
            .get("https://swapi.co/api/people")
            .then(response => {
                this.setState({
                    people: response.data.results.map((p) => p.name+', '),
                })
            })
    }

    render() {
        const { title, link } = this.props;
        let showLink;

        if (link !== undefined) {
            showLink = <Col style={{ textAlign: 'right', marginRight: '30px' }}><h6><a href={link}>See All</a></h6></Col>;
        }
        return (
            <React.Fragment>
                <Row>
                    <Col style={{ textAlign: "left" }}><h5>{title}</h5></Col>
                    {showLink}
                </Row>
                <Row>
                    <Col sm={12}>
                    <Jumbotron style={{ padding: '10px', marginLeft: '30px', marginRight: '30px' }}>
                        <Container style={{ margin: '10px' }}>
                            <Row>
                                <Col sm={12} style={{ textAlign: 'left' }}>
                                    <h6>Awesome meetup and event</h6>
                                    <p style={{ color: 'grey' }}>25 January 2019</p>
                                    <p>
                                        Hello, Javascript & Mode.js Ninjas !<br />
                                        Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                                        The Meetup format will contain some short stories and technical Talks .<br />
                                        If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.<br /><br />

                                        Remember to bring a photo ID to get through building security .<br /><br />
                                        ---------<br /><br />
                                        See you there!
                                        Best, {this.state.people} The Jakarta JS Organizers
                                    </p>
                                </Col>
                            </Row>                            
                        </Container>
                    </Jumbotron>
                    </Col>                    
                </Row>
            </React.Fragment>


        )
    }
}
