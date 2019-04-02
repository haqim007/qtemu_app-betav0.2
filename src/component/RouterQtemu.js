import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Me from './Me';
import Login from './Login';
import JoinUs from './JoinUs';


class RouterQtemu extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route path="/about/:name" component={Me} />
                        <Route path="/login" component={Login} />
                        <Route path="/joinUs" component={JoinUs} />
                    </Switch>
                </Router>
            </Fragment>
        );
    }
}

export default RouterQtemu;