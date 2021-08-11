import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions/newUser';

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
        const { newUser, user } = this.props;

        await newUser({
            name, email, password,
        });

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

    render() {
        const { message } = this.state;
        return (
            <form onSubmit={this.onSubmitHandler} >
                <h1>{message}</h1>
                <input onChange={this.handleUsernameChange} type="text" required />
                <input onChange={this.handleEmailChange} type="email" required />
                <input onChange={this.handlePasswordChange} type="password" required />
                <input onChange={this.handleAvatarChange} type="file" accept="/images/*" />
                <button type="submit">Create Account</button>
            </form>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
});
const mapDispatchToProps = dispatch => ({
    newUser: estate => dispatch(createUser(estate)),
});
NewUser.propTypes = {
    newUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);