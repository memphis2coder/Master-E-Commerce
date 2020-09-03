import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { signInWithGoogle} from '../../firebase/firebase';

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
            <div className="sign-in">
                <h2 className="title">I already have a account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;
