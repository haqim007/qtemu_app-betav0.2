import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

export default class AboutMeetup extends Component {
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
                        <Container style={{ margin: '10px' }}>
                            <Row>
                                <Col sm={12} style={{ textAlign: 'left' }}>
                                   <p>
                                   Come and meet other developers interested in the javascript and it's library in the Greater Jakarta Area !
                                    </p>
                                    <p>
                                    Twitter : @JakartaJS and we use the hashtag #jakartajs
                                    </p>
                                </Col>
                            </Row>                            
                        </Container>
                    
                    </Col>                    
                </Row>
            </React.Fragment>


        )
    }
}
