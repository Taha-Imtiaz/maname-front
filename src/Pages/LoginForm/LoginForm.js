import React from "react";
import LoginPageHead from "../../components/LoginPageHead/LoginPageHead";
import LoginFormFields from "../../components/LoginFormFields/LoginFormFields";
import LoginFormButton from "../../components/LoginFormButton/LoginFormButton";
import FormIcons from "../../components/FormIcons/FormIcons";
import "./LoginForm.css";
import AccountNotExists from "../../components/AccountNotExists/AccountNotExists";

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <div className="loginimage"></div>
      <div className="form-components">
        <LoginPageHead />
        <LoginFormFields />
        {/* <LoginFormButton/> */}
        {/* <FormIcons/> */}
        <AccountNotExists />
      </div>
    </div>
  );
};

export default LoginForm;
