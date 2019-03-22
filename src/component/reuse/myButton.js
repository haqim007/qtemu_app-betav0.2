import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MyButton extends Component {
    render() {
        const { variant, text } = this.props;
        return (
            <Button variant={variant}>{text}</Button>
        )
    }
}

export default MyButton;