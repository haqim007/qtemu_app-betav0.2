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

// render() {
//     console.log(this.props)
//     const { variant, text, link } = this.props;

//     return (
//         <Button variant={variant}> <Link to={link | '#'}>{text}</Link> </Button>
//     )
// }
// }

export default MyButton;