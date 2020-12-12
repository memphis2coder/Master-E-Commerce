import React, {useState} from 'react'

import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase';

import './sign-up.styles.scss';

const SignUp = () => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    // destructure
    const {displayName, email, password, confirmPassword} = userCredentials;

    const onSubmit = async event => {
        event.preventDefault();
        

        if (password !== confirmPassword) { // if passwords dont match send the user alert
            alert("passwords don't match");
            return;
        }
        try {
            // user = create a new account with email and password
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            // run createUserProfileDocument with the user and displayName
            await createUserProfileDocument(user, {displayName});

            // userCredentials({ // reset input fields
            //     displayName: "",
            //     email: "",
            //     password: "",
            //     confirmPassword: ""
            // })

        } catch (error) {
            console.error(error)
        }
    };

    const handleChange = event => { // this way we can use hangleChange on all input fields
        const {name, value} = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }

    
        
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span className="title">Sign up with your email and password</span>
                    <form className="sign-up-form" onSubmit={onSubmit}>
                        <FormInput 
                            type="text"
                            name="displayName"
                            value={displayName}
                            onChange={handleChange}
                            label="display name"
                            required
                        />
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
                        <FormInput 
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            label="confirm password"
                            required
                        />
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </form>
            </div>
        )
    }


export default SignUp;
