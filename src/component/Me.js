import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import {increment, decrement, reset} from '../Redux/action';
import { bindActionCreators } from 'redux';

class Me extends Component {
    
    increment = () => {
        this.props.increment(5)
    }

    decrement = () => {
        this.props.decrement(10)
    }

    reset = () => {
        this.props.reset()
    }
    
    render() {
        const {number,title,info} = this.props;

        return (
            <React.Fragment>
                {this.props.match.params.name}
                <hr />
                <div>
                    {title}
                </div>
                <div>
                    Hello {number}
                </div> 
                <div>
                    Info : {info}
                </div> 
                <hr/>
                <div>
                    <ButtonGroup aria-label="Basic example" size="lg">
                    <Button variant="primary" onClick={() => this.increment()}> Increment </Button>
                    <Button variant="warning" onClick={() => this.decrement()}> Decrement </Button>
                    <Button variant="danger" onClick={() => this.reset()}> Reset </Button>
                    </ButtonGroup>
                </div> 
            </React.Fragment>
        );
    }
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    increment,
    decrement,
    reset
},dispatch);

const mapStateToProps = (state) => {
   return({
       title: state.title,
       number: state.angka,
       info: state.info
   })
}

// connect(props,action)

export default connect(mapStateToProps, mapDispatchToProps)(Me);
