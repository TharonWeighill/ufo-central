import React, { Component } from 'react';

export class NewUserForm extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    };

    handleChange = (e) => {
        const elName = e.target.name;
        const elValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [elName]: elValue });
    };

    handleSubmit(e) {
        e.preventDefault();
        debugger;
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input id="name" name="name" className="name" onChange={this.handleChange} value={this.state.name} />
                    <label>Email</label>
                    <input id="email" name="email" className="email" onChange={this.handleChange} value={this.state.email} />
                    <label>Password</label>
                    <input id="password" name="password" className="password" onChange={this.handleChange} value={this.state.email} />
                    <input type="submit" value="Create User" />
                </form>
            </div>
        );
    }
}

export default NewUserForm;
