import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserContainer from '../Features/User/UserContainer';

export default class extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={UserContainer} exact />
                    <Redirect exact to='/' component={UserContainer} />
                </Switch>
            </Router>
        )
    }
}