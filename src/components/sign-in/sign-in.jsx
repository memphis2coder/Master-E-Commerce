import React, {useState} from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle} from '../../firebase/firebase';

import './sign-in.styles.scss';

const SignIn = () => {
    
    const [userCredentials, setCredentials] = useState({email: '', password: ''});
    
    const { email, password } = userCredentials;

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent default action
    }

    const handleChange = (e) => {
        const { name, value } = e.target; // pulling the name and value from target
        setCredentials({...userCredentials, [name]: value }); // now i can use this function on both input fields
    };

    
        return (
            <div className="sign-in">
                <h2 className="title">I already have a account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="email"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="password"
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    
}

export default SignIn;
