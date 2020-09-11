import React from "react";
import "./FormIcons.css"
import google from "./39216d73519bca962bd4a01f3e8f4a4b.png"
import SocialButton from "../SocialLogin/SocialButton";
// import facebook from "../../images/facebook.png"


const FormIcons = () => {

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
      <i className="fa fa-facebook"></i>
    
      </div>
      <div className="google circle flex">
      {/* <SocialButton
      provider='google'
      appId='YOUR_APP_ID'
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >*/}
     <img src={google} alt=""/>
    {/* </SocialButton>  */}
      </div>
     
       </div>

    
    </div>
  );
};

export default FormIcons;
