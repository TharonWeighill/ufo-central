import React from 'react';

export default function NewUserForm() {

    const { user, email, password } = this.state;

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <input type="text" name="user" value={user} onChange={this.changeHandler}></input>
                <input type="text" name="password" value={email} onChange={this.changeHandler}></input>
                <input type="text" name="email" value={password} onChange={this.changeHandler}></input>
                <button>Submit</button>
            </form>
        </div>
    );
}
