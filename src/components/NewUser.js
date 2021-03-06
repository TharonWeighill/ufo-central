import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/auth';
import '../styles/NewUser.css';

class NewUser extends Component {
  state = {
    email: "",
    password: "",
    errors: {status: {message: ""}}
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
    .signupUser({ email, password })
    .then(() => this.props.history.push("/"))
    .catch((errors) => this.setState({ errors }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='signup'>
        <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
        <p className='h-8 text-red-400'>{this.state.errors.status.message}</p>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='email'> Email: </label>
          <input type='text' name='email' id='email' onChange={this.handleChange} value={this.state.email} />
        </fieldset>
        <fieldset>
          <label className='block uppercase mb-2' htmlFor='password'> Password:</label>
          <input type='password' name='password' id='password' onChange={this.handleChange} value={this.state.password} />
        </fieldset>
        <input className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4' type='submit' value='Sign Up' />
      </form>
    );
  }
}
    
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (credentials) => dispatch(signupUser(credentials))
  };
};
    
export default connect(null, mapDispatchToProps)(NewUser);