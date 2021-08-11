import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }
    onSubmitHandler = async (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;
        const { newUser, user } = this.props;
        await newUser({ name, email, password });
        if (user.isLogin === true) {
            const { history } = this.props;
            history.push('/');
        } else {
            this.setState(
                {
                    message: 'The Truth is here',
                },
            );
        }
    };

    handleUsernameChange = (e) => { this.setState({ name: e.target.value, }); };

    handleEmailChange = (e) => { this.setState({ email: e.target.value, }); };

    handlePasswordChange = (e) => { this.setState({ password: e.target.value, }); };

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <h1>{message}</h1>
                <input
                    onChange={this.handleUsernameChange}
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                />

                <input
                    onChange={this.handleEmailChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                <input
                    onChange={this.handlePasswordChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <button type="submit">
                    Create Account
                </button>
            </form>
        );
    }
}
export default Signup;