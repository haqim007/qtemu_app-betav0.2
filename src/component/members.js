import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios";

export default class Members extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            members:"",
            titleMembers: "",
            lihatButton: ""
        };
    }

    componentDidMount(){
        axios
            .get("https://swapi.co/api/people")
            .then(response => this.setState({ 
                people: response.data.results,
                lihatButton: <Button variant="primary" onClick={() => this.getMembers()}>Lihat Members</Button> }))
    }

    getMembers = () => {
        this.setState({
            titleMembers: "Members",
            members: this.state.people.map((p, id) => <li key={id}>{p.name}</li>),
            lihatButton: <Button variant="warning" onClick={() => this.deleteMembers()}>Sembunyikan Members</Button>
        })
    }

    deleteMembers = () => {
        this.setState({
            titleMembers: "",
            members: "",
            lihatButton: <Button variant="primary" onClick={() => this.getMembers()}>Lihat Members</Button>
        })
    }

    render() {
        const { title, link } = this.props;
        let showLink;

        // let members = this.state.people.map((p, id) => <li>{p.name}</li>);

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
                                    <Col style={{ textAlign: 'left' }}>
                                        <div style={{ float: 'left', marginRight: '10px' }}>
                                            <Image src="https://randomuser.me/api/portraits/men/34.jpg"
                                                roundedCircle style={{ width: '70px', height: '70px', }} fluid />
                                        </div>
                                        <div style={{ display: "table cell", verticalAlign: "middle" }}>
                                            <h6>Organizer</h6>
                                            <p>Adhy Wiranata &nbsp;&nbsp;&nbsp;   
                                                <a href="#">
                                                <b>4 Others</b>
                                                </a>
                                                
                                            </p>
                                            {/* <Button variant="primary" onClick={() => this.getMembers()}>Lihat Members</Button> */}
                                            {this.state.lihatButton}
                                        </div>
                                        <div style={{ display: "table cell", verticalAlign: "middle" }}>
                                            <h6>{this.state.titleMembers}</h6>
                                            
                                                <ol>{this.state.members}</ol>
                                            
                                        </div>
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
