import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';
import { useHistory } from 'react-router-dom';

const Logout = ({ logoutUser }) => {
  const history = useHistory();
  
  const handleClick = () => {
    logoutUser().then(() => history.push('/'));
  };


  return (
    <a href='/logout' onClick={handleClick}>Logout</a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);