import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Footer extends Component {
    render(){
        return (
            <Row>
            <Col sm={12}>
                <hr/>
                <p style={{textAlign:"center"}}>Copyright Hacktiv8 2018</p>
            </Col>
        </Row>
    
               
    
        )

    }
    
}

export default Footer;