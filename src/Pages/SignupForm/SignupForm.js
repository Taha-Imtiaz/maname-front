import React from 'react'
import SignupPageHead from '../../components/SignupPageHead/SignupPageHead'
import SignupFormFields from '../../components/SignupFormFields/SignupFormFields'
import SignupFormButton from '../../components/SignupFormButton/SignupFormButton'
import "./SignupForm.css"
import FormIcons from '../../components/FormIcons/FormIcons'

const SignupForm = () => {
    return (
        <div className = "signup-form-container">
            <div className="signupimage"></div>
            <div className="form-components">
             <SignupPageHead/> 
           <SignupFormFields/>
           <SignupFormButton/>
           <FormIcons/>
        </div>
        </div>
    )
}

export default SignupForm
