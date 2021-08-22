import '../styles/Login.css';
import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/auth";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props
      .dispatchLoginUser({ email, password })
      .then(() => this.props.history.push("/"))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} >
          <input onChange={this.handleUsernameChange} type="text" placeholder="NAME" required />
          <input onChange={this.handleEmailChange} type="email" placeholder="Email" required />
          <input onChange={this.handlePasswordChange} type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
}



const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
  };
};


export default connect(null, mapDispatchToProps)(Login);