import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newSighting } from '../actions/sightings';
import '../styles/NewSighting.css';

class NewSighting extends Component {
    state = {
        city: '',
        comments: '',
        date_posted: '',
        latitude: '',
        longitude: '',
        errors: {status: {message: ""}}
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {  city, comments, date_posted, latitude, longitude  } = this.state;
        this.props
        .newSighting({ city, comments, date_posted, latitude, longitude })
        .then(() => this.props.history.push("/"))
        .catch((errors) => this.setState({ errors }));
    };

    
    render() {
        return (
            <div className='newsighting'>
                <form onSubmit={this.handleSubmit} >
                    <fieldset>
                        <label className='block uppercase mb-2' htmlFor='city'> City: </label>
                        <input type='text' name='city' id='city' onChange={this.handleChange} value={this.state.city} />
                    </fieldset>
                    <fieldset>
                        <label className='block uppercase mb-2' htmlFor='comments'> Comments: </label>
                        <input type='text' name='comments' id='comments' onChange={this.handleChange} value={this.state.comments} />
                    </fieldset>
                    <fieldset>
                        <label className='block uppercase mb-2' htmlFor='date_posted'> Date Witnessed: </label>
                        <input type='text' name='date_posted' id='date_posted' onChange={this.handleChange} value={this.state.date_posted} />
                    </fieldset>
                    <fieldset>
                        <label className='block uppercase mb-2' htmlFor='latitude'> Latitude: </label>
                        <input type='float' name='latitude' id='latitude' onChange={this.handleChange} value={this.state.latitude} />
                    </fieldset>
                    <fieldset>
                        <label className='block uppercase mb-2' htmlFor='longitude'> Longitude: </label>
                        <input type='float' name='longitude' id='longitude' onChange={this.handleChange} value={this.state.longitude} />
                    </fieldset>
                    <input className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4' type='submit' value='Report Sighting!' />
                </form>
            </div>
        );
    };
}

 
const mapDispatchToProps = (dispatch) => {
    return {
      newSighting: (credentials) => dispatch(newSighting(credentials))
    };
  };
      
export default connect(null, mapDispatchToProps)(NewSighting);