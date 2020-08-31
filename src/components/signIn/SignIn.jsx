import React from 'react';

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "", // set initial email state to empty
            password: "", // set initial password state to empty
        }
    }

    handleSubmit = (e) => {
        e.preventDefault(); // prevent default action
        this.state({ email: "", password: "" }) // reset input fields after submit
    }

    handleChange = (e) => {
        const { name, value } = e.target; // pulling the name and value from target
        this.setState({ [name]: value }); // now i can use this function on both input fields
    }

    render() {
        return (
            <div className="signIn-form">
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit} className="signIn-inputs">
                    <label>Email:</label>
                    <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required />
                    
                    <label>password:</label>
                    <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required />
                    
                    <button type="submit" value="Submit" className="form-button">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default SignIn;
