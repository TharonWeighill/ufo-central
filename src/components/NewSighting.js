import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSighting } from '../actions/newSighting';
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

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value,
        });
    };

    handleStateChange = (e) => {
        this.setState({
            state: e.target.value,
        });
    };

    handleCountryChange = (e) => {
        this.setState({
            country: e.target.value,
        });
    };

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value,
        });
    };

    handleDatePostedChange = (e) => {
        this.setState({
            date_posted: e.target.value,
        });
    };


    handleLatitudeChange = (e) => {
        this.setState({
            latitude: e.target.value,
        });
    };

    handleLongitutdeChange = (e) => {
        this.setState({
            longitutde: e.target.value,
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
            <div className="newsighting">
                <form onSubmit={this.onSubmitHandler} >
                    <h1>{message}</h1>
                    <input onChange={this.handleCityChange} type="text" placeholder="City" required />
                    <input onChange={this.handleStateChange} type="email" placeholder="State" required />
                    <input onChange={this.handleCountryChange} type="password" placeholder="Country" required />
                    <input onChange={this.handleCommentsChange} type="text" placeholder="Comments about Sighting" required />
                    <input onChange={this.handleDatePostedChange} type="email" placeholder="Date of Sighting" required />
                    <input onChange={this.handleLatitudeChange} type="password" placeholder="Lat" required />
                    <input onChange={this.handleLongitutdeChange} type="password" placeholder="Long" required />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    sighting: state.sighting,
});
const mapDispatchToProps = dispatch => ({
    newSighting: estate => dispatch(createSighting(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSighting);