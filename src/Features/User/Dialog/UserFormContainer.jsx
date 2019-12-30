import React, { Component } from 'react';
import { getById, create, update, remove } from '../../../Modules/Api';

import UserFormComponent from './UserFormComponent';

class UserFormContainer extends Component {

    state = {
        open: false,
        id: null,
        firstName: '',
        lastName: '',
        msgError: null,
    }

    onChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    onOpen = () => {
        if (this.props.id) {
            getById(this.props.id).then(res => {
                this.setState({
                    open: true,
                    id: res.data.id,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    msgError: null,
                })
            })
        } else {
            this.setState({
                open: true,
                id: null,
                firstName: '',
                lastName: '',
                msgError: null,
            })
        }
    }

    onClose = () => {
        this.setState({ open: false })
    }

    onSave = () => {
        const { id, firstName, lastName } = this.state;    

        if (firstName === '') {
            this.setState({ msgError: 'Por favor, preencher o primeiro nome.'});
        } else {
            if (id) {
                update({
                    id,
                    firstName,
                    lastName
                }).then(res => {
                    this.props.getUsers();
                    this.onClose();
                })
            } else {
                create({
                    firstName,
                    lastName
                }).then(res => {
                    this.props.getUsers();
                    this.onClose();
                })
            }
        }
    }

    onDelete = () => {
        const { id } = this.state;

        remove(id).then(res => {
            this.props.getUsers();
            this.onClose();
        })
    }

    render() {
        return (
            <UserFormComponent
                {...this.props}
                {...this.state}
                onChange={this.onChange}
                onOpen={this.onOpen}
                onClose={this.onClose}
                onSave={this.onSave}
                onDelete={this.onDelete}
            />    
        )   
    }

}

export default UserFormContainer;