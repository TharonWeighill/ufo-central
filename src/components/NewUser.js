import React, { Component } from 'react';
import NewUserForm from './NewUserForm';

export class NewUser extends Component {
    state = {
        visible: true
    };
    render() {
        return (
            <div>
                <div className="newuser">
                    {this.state.visible ? <NewUserForm /> : true}
                </div>

            </div>
        );
    }
}
export default NewUser;