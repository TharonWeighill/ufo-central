import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/newUser';
import '../styles/NewUser.css';

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        };
    }

    handleUsernameChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    onSubmitHandler = async (e) => {
        e.preventDefault();
        const {
            name, email, password,
        } = this.state;
        const { newUser } = this.props;

        await newUser({
            name, email, password,
        });


        this.setState(
            {
                message: 'The Truth is here',
            },
        );

    };

    render() {
        const { message } = this.state;
        return (
            <div className="signup">
                <form onSubmit={this.onSubmitHandler} >
                    <h1>{message}</h1>
                    <input onChange={this.handleUsernameChange} type="text" placeholder="NAME" required />
                    <input onChange={this.handleEmailChange} type="email" placeholder="Email" required />
                    <input onChange={this.handlePasswordChange} type="password" placeholder="Password" required />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = dispatch => ({
    newUser: estate => dispatch(createUser(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);