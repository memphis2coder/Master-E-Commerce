import React from 'react'

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    onSubmit = async event => {
        event.preventDefault();
        // destructure
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) { // if passwords dont match send the user alert
            alert("passwords dont match");
            return;
        }
        try {
            // user = create a new account with email and password
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            // run createUserProfileDocument with the user and displayName
            await createUserProfileDocument(user, {displayName});

            this.setState({ // reset input fields
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error)
        }
    };

    handleChange = event => { // this way we can use hangleChange on all input fields
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render () {
        // destructure
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span className="title">Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={this.onSubmit}>
                        <FormInput 
                            type="text"
                            name="displayName"
                            value={displayName}
                            onChange={this.handleChange}
                            label="display name"
                            required
                        />
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            label="email"
                            required
                        />
                        <FormInput 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            label="password"
                            required
                        />
                        <FormInput 
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label="confirm password"
                            required
                        />
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </form>
            </div>
        )
    }
}

export default SignUp;
