import React, { Component } from 'react';

export class UserContainer extends Component {
    state = {
        user: []
    };

    componentDidMount() {
        console.log("componentDidMount");
        fetch("http://localhost:3000/users")
            .then(resp => resp.json())
            .then(json => {
                this.setState({ users: json });
            });
    }

  

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default User;
