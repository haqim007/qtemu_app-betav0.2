import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from "axios";
import {connect} from "react-redux";
import { getPeople } from '../Redux/action';
import { bindActionCreators } from 'redux';

class Members extends Component {
    constructor(props){
        super(props);
        this.state = {
        //     people: [],
            members:"",
            titleMembers: "",
            lihatButton: "",
        //     organizer: ""
        };
    }

    getMembersData = () => {
        this.props.getPeople();
    }

    componentDidMount(){
        // axios
        //     .get("https://swapi.co/api/people")
        //     .then(response => {
        //             this.setState({ 
        //             people: response.data.results,
        //             lihatButton: <Button variant="primary" onClick={() => this.getMembers()}>Lihat Members</Button>,
        //             organizer: response.data.results.map((p, id) => {
        //                 if (id === 0) {
        //                     return p.name
        //                 }
        //             }) 
        //             });
        //         }
        //     )
        this.getMembersData();
        this.setState({
            lihatButton: <Button variant="primary" onClick={() => this.getMembers()}>Lihat Members</Button>,
        });


    }

    getMembers = () => {
        this.setState({
            titleMembers: this.props.titleMembers,
            // members: this.state.people.map((p, id) => <li key={id}>{p.name}</li>),
            members: this.props.members,
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
        const { title, link, organizer } = this.props;
        let showLink;

        // let members = this.state.people.map((p, id) => <li>{p.name}</li>);

        if (link !== undefined) {
            showLink = <Col style={{ textAlign: 'right', marginRight: '30px' }}><h6><a href={link}>See All</a></h6></Col>;
        }
        return (
            <React.Fragment>
                <Row>
                    <Col style={{ textAlign: "left", marginLeft: '1em' }}><h5>{title}</h5></Col>
                    {showLink}
                </Row>
                <Row>
                    <Col sm={12}>
                        <Jumbotron style={{ padding: '10px', marginLeft: '30px', marginRight: '30px' }}>
                            <Container style={{ margin: '10px' }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }}>
                                        <div style={{ float: 'left', marginRight: '10px' }}>
                                            <Image src="https://www.listchallenges.com/f/items/ffe32285-a4f7-4239-b8f2-df7002d06280.jpg"
                                                roundedCircle style={{ width: '70px', height: '70px', }} fluid />
                                        </div>
                                        <div style={{ display: "table cell", verticalAlign: "middle" }}>
                                            <h6>Organizer</h6>
                                            <p> {organizer}  &nbsp;&nbsp;&nbsp;
                                            {/* {this.state.organizer}    */}
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

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     getPeople
// },dispatch)

const mapDispatchToProps = {
    getPeople
}

const mapStateToProps = (state) => ({
    organizer: state.people.map((p, id) => {
        if (id == 0) {
            return p.name
        }
    }),
    members: state.people.map((p,id) => <li key={id}>{p.name}</li>),
    titleMembers: "Members"
})

export default connect(mapStateToProps, mapDispatchToProps)(Members)