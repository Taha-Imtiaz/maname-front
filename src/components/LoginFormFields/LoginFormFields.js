import React, { Component } from "react";
import styles from "./LoginFormFields.module.css";
import { registerUser, loginUser } from "../../API/axios";
import { withRouter } from "react-router-dom";
import { Alert } from "react-bootstrap";

class LoginFormFields extends Component {
  state = {
    username: "",
    password: "",
    provider: "MAIL",
    loginAlert: false,
  };
  handleInput = (e) => {
    var { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  // validateForm = ({username,password}) => {
  //   var {errors: {usernameError,passwordError}} = this.state
  //   console.log(usernameError,passwordError)
  //   var userNameRegex = /^[A-Za-z. ]{3,30}$/
  //   // var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  //   if(username.match(userNameRegex)) {
  // this.setState({
  //    usernameError: ""
  // })
  //  }
  // else if(!username.match(userNameRegex)) {
  //   this.setState({
  //      usernameError: "Username is Invalid"
  //   })
  // }
  // else if(password.match(passwordRegex)) {
  //   this.setState({
  //     passwordError: ""
  //   })
  // }
  // else if(!password.match(passwordRegex)) {
  //   this.setState({
  //     passwordError: "Password is invalid"
  //   })
  // }
  // }
  handleFormSubmit = (e) => {
    var { username, password, provider, loginAlert } = this.state;
    var { history } = this.props;
    e.preventDefault();
    var userObj = {
      username: username,
      password: password,
      provider: provider,
    };
    // this.validateForm({username, password} )
    loginUser(userObj, (failed) => {
      console.log("login");

      if(failed === "failed") {
      this.setState({
        loginAlert: true,
      });
      setTimeout(() => {
        this.setState({
          loginAlert: false,
        });
      }, 5000);
    }
    else {
      console.log("login success")
      history.push("/timeline")
    }
    });
  };

  render() {
    var { username, password, loginAlert } = this.state;

    // var {errors: {usernameError,passwordError}} = this.state
    return (
      <div className="login-container">
        {loginAlert && (
          <Alert className={`${styles.loginAlert} ${styles.flex}`}>
            Please use valid credentials
          </Alert>
        )}
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className={`${styles.formCheckInput}`}
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              I agree with all the terms and conditions
            </label>
          </div>
          <button type="submit" className={`${styles.loginBtn}`}>
            Login
          </button>
        </form>

        {/* <form onSubmit = {this.handleFormSubmit}>

          <div className="loginusername">
              <label htmlFor="" style = {{transform: "translateY(-1rem)"}}>Username</label>
            <input type="text"  name = "username" value = {username} onChange = {this.handleInput}/>
           
              </div>

           

        <div className="loginpassword">
         <label htmlFor="">Password</label>
          <input type="password"  name = "password" value = {password} onChange = {this.handleInput}/>
     
         </div>

         <div className="terms-conditions">
           <p className = "selectbox flex"> 
           <input type="checkbox"/>
           I agree with all the terms and conditions </p>
          
          </div>
          <div className="Signup-heading">
           <button type = "submit">Login</button>
           </div>
          </form>
          */}
      </div>
    );
  }
}

export default withRouter(LoginFormFields);
