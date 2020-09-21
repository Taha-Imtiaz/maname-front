import React from "react";
import "./FormIcons.css"
import google from "./39216d73519bca962bd4a01f3e8f4a4b.png"
import SocialButton from "../SocialLogin/SocialButton";
// import facebook from "../../images/facebook.png"
import { OldSocialLogin as SocialLogin } from 'react-social-login'

const FormIcons = () => {

  const handleSocialLogin = (user, err) => {
    console.log(user)
    console.log(err)
  }

//   const handleSocialLogin = (user) => {
//     console.log(user)
//   }
   
//   const handleSocialLoginFailure = (err) => {
//     console.error(err)
//   }
// const handletriggerLogin = () => {
//   console.log("trigger login")
// }
  return (
    <div className = "login-icons">
       <div className="icons">
      <div className="facebook circle flex">
      <SocialLogin
     provider='facebook'
     appId='YOUR_APP_ID'
      callback={handleSocialLogin}>
      
      <i className="fa fa-facebook"></i>
     </SocialLogin> 
      </div>
      <div className="google circle flex">
       <SocialLogin
      provider='google'
      appId='YOUR_APP_ID'
      callback={handleSocialLogin}
    >
     <img src={google} alt=""/>
    </SocialLogin> 
      
      {/* <SocialLogin
      provider='google'
      appId='YOUR_APP_ID'
      callback={handleSocialLogin}
    >
      <button>Login with Google</button>
    </SocialLogin> */}
      </div>
     
       </div>

    
    </div>
  );
};

export default FormIcons;
