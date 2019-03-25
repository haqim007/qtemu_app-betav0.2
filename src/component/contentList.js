import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NextMeetup from './NextMeetup';
import AboutMeetup from './aboutMeetup';
import Members from './members';
import PastMeetup from './pastMeetup';
import Footer from './footer';

class ContentList extends Component {
    render() {
        return (
            <Container style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
                <NextMeetup title="Next Meetup" />
                <AboutMeetup title="About Meetup"/>  
                <Members title="Members" link="#"/>   
                <PastMeetup title="Past Meetup" link="#"/>   
                <Footer/>   
            </Container>
        )
    }
}

export default ContentList;