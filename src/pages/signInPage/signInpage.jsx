import React from 'react'
import SignIn from '../../components/signIn/SignIn'
import SignUp from '../../components/signUp/SignUp';

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
