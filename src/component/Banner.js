import React, { Component } from 'react';
import MyButton from './reuse/myButton';
import { Image,Row,Col,Jumbotron, Container } from 'react-bootstrap'
import BannerImage from '../assets/img/buzz.jpeg'

export default class Banner extends Component {
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
                            <p>Organizer   &nbsp;&nbsp;: Adhy Wiranata</p>
                            <MyButton variant="primary" text="Join Us"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>            
        );
    }
}