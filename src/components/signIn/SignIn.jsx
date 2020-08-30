import React from 'react';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        handleChange(event) {
            this.setState({value: event.target.value})
        }

        handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="signInForm">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input
                    name="email" 
                    type="email" 
                    value={this.state.email} required
                    onChange={this.handleChange}
                    />
                    <label>email</label>
                    <input
                    name="password" 
                    type="password" 
                    value={this.state.email} required
                    onChange={this.handleChange}
                    />
                    <label>password</label>

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        )
    }
} 

export default SignIn;