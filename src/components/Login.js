import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/newUser';
import '../styles/Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

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
            email, password,
        } = this.state;
        const { user } = this.props;

        await user({
            email, password,
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
            <div className="login">
                <form onSubmit={this.onSubmitHandler} >
                    <h1>{message}</h1>
                    <input onChange={this.handleEmailChange} type="email" placeholder="Email" required />
                    <input onChange={this.handlePasswordChange} type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = dispatch => ({
    loginUser: estate => dispatch(createUser(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);