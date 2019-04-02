import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

export default class PastMeetup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                date: "27 November 2017",
                event: "#39 JakartaJS April Meetup with kumparan",
                went: 139
            },
            {
                date: "27 Oktober 2017",
                event: "#38 JakartaJS April Meetup with Blibli",
                went: 113
            },
            {
                date: "27 September 2017",
                event: "#37 JakartaJS April Meetup with Hacktiv8",
                went: 110
            }]
        }
    }

    

    render() {

        const { title, link } = this.props;
        let showLink;
        let content = this.state.data.map(function (data, id) {
            return (
                <Col sm={4} key={id} >
                    <Jumbotron style={{ padding: '10px', marginRight: '30px', marginLeft: '30px' }}>
                        <Container style={{ margin: '10px' }}>
                            <Row>
                                <Col sm={12} style={{ textAlign: 'left' }}>
                                    <h6>{data.date}</h6>
                                    <hr />
                                    <p>
                                        {data.event}
                                    </p>
                                    <p>{data.went} <span style={{ color: 'grey' }}>went</span></p>
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                </Col>
            )
        })

        if (link !== undefined) {
            showLink = <Col style={{ textAlign: 'right', marginRight: '30px' }}><h6><a href={link}>See All</a></h6></Col>;
        }
        return (
            <React.Fragment>
                <Row>
                    <Col style={{ textAlign: "left", marginLeft: '1em'  }}>
                        <h5>{title}</h5>
                    </Col>
                    {showLink}
                </Row>
                <Row>
                    <Col sm={12}>
                        <Row>
                            {content}
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
