import React, { Component } from 'react';
import { getAll } from '../../Modules/Api';

import UserComponent from './UserComponent';

class UserContainer extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.onGet();
    }
    
    onGet = () => {
        getAll().then(res => {
            this.setState({ users: res.data || [] });
        });
    }

    render() {
        return (
            <UserComponent 
                {...this.state}
                onGet={this.onGet}
            />
        )
    }
}

export default UserContainer;