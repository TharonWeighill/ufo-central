import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newSighting } from '../actions/sightings';
import '../styles/NewSighting.css';

class NewSighting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            state: '',
            country: '',
            comments: '',
            date_posted: '',
            latitude: '',
            longitutde: '',

        };
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    };

    onSubmitHandler = async (e) => {
        e.preventDefault();
        const {
            city, state, country, comments, date_posted, latitude, longitutde,
        } = this.state;
        
        const { newSighting } = this.props;

        await newSighting({
            city, state, country, comments, date_posted, latitude, longitutde,
        });

        this.setState(
            {
                message: 'The Truth has been reported',
            },
        );
    };

    render() {
        const { message } = this.state;
        return (
            <div className='newsighting'>
                <form onSubmit={this.onSubmitHandler} >
                    <h1>{message}</h1>
                    <input onChange={this.handleChange} type='text' placeholder='City' id ='city' value={this.state.city} />
                    <input onChange={this.handleChange} type='text' placeholder='State' value={this.state.state}/>
                    <input onChange={this.handleChange} type='text' placeholder='Country' value={this.state.country} />
                    <input onChange={this.handleChange} type='text' placeholder='Comments about Sighting' value={this.state.comments} />
                    <input onChange={this.handleChange} type='text' placeholder='Date of Sighting' value={this.state.date_posted} />
                    <input onChange={this.handleChange} type='text' placeholder='Lat' value={this.state.latitude} />
                    <input onChange={this.handleChange} type='text' placeholder='Long' value={this.state.longitutde} />
                    <button type='submit'>Report Sighting!</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    sighting: state.sighting,
});
const mapDispatchToProps = dispatch => ({
    newSighting: estate => dispatch(newSighting(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSighting);