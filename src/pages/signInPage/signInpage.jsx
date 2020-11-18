import React from 'react'
import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up';

import './SignInPage.scss';

function SignInPage () {
    
    return (
        <div className="signIn-and-singUp">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInPage;
