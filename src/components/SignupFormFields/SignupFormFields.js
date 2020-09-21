import React, { Component } from 'react';
import styles from "./SignupFormFields.module.css";
import { registerUser, getExistingUser } from '../../API/axios';
import { withRouter } from 'react-router-dom';
import { validate } from 'uuid';

class SignupFormFields extends Component {
state = {
   username: '',
    email: '',
    password: '',
    emailError: '',
    userExists: ''

    
}
validate = (emailValue) => {
 
  var {emailError} = this.state;
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!(emailValue.match(emailRegex))) {
  this.setState({
    emailError: "Email is invalid"
  })  
  }
  else {
    this.setState({
      emailError: ""
    })  
  }
}

handleInput = (e) => {
 var {userExists} = this.state

    var {name,value} = e.target;

   if(name === "username") {
     setTimeout(() => {
      getExistingUser(value).then((res) => {
        if(res.data.code === 400){
     this.setState({
          userExists: res.data.message
        })
        }
       else {
        this.setState({
          userExists:""
        })
       }
      })
     }, 2000);
   
   }
   this.validate(value)
   if(this.validate) {
    this.setState({
        [name]: value
       
    })
}
}
handleFormSubmit = (e) => {
  var {username, email, password} = this.state
  var {history} = this.props
  e.preventDefault();
  var userObj = {
    username: username,
    email: email, 
    password: password
  }

 registerUser(userObj, () => {
  history.push("/timeline")
})
}

  render() {
      var {username, email, password,emailError,userExists} = this.state;
      // console.log(emailError)
    return (
      <div className="signup-form ">
       {/* <div className = "Signup-container"> */}
      <form onSubmit = {this.handleFormSubmit}>
      <div className="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="text" className="form-control" name = "username" value = {username} onChange = {this.handleInput} placeholder="Enter username" required></input>

  {userExists &&    <small className={`${styles.formText} ${styles.textMuted} ${styles.checkUser}`}   style = {{fontSize:"1.4rem",backgroundColor:"#FFC0CB",borderRadius: "0.3rem"}}>{userExists}</small>}
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name = "email" value = {email} onChange = {this.handleInput} placeholder="Enter email" required></input>
 {/* <span  style = {{backgroundColor:"#FFC0CB",fontSize: "1.3rem", borderRadius: "0.3rem"}}></span> */}
 {(email !== "" && emailError !== "") ?  <small id="emailHelp" style = {{fontSize:"1.4rem",backgroundColor:"#FFC0CB",borderRadius: "0.3rem"}} className={`${styles.formText} ${styles.textMuted}`}>{emailError}</small>: null}   
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name = "password" value = {password} onChange = {this.handleInput} className="form-control" placeholder="Password" required/>
  </div>
  <div className="form-check">
    <input type="checkbox" className={`${styles.formCheckInput}`} />
    <label className={`${styles.formCheckLabel}`} >  I agree with all the terms and conditions</label>
  </div>
  <button type="submit" className={`${styles.btn} ${styles.btnPrimary} ${styles.signupbtn}`}  >Sign Up</button>
</form>
          {/* <form onSubmit = {this.handleFormSubmit}>

          <div className="username">
              <label htmlFor="">Username</label>
            <input type="text"  name = "username" value = {username} onChange = {this.handleInput}/>
    {userExists &&  <span style = {{fontSize:"1.4rem",backgroundColor:"#FFC0CB",borderRadius: "0.3rem"}}>{userExists}</span>}
              </div>

              <div className="signupemail">
              <label htmlFor="">Email</label>
            <input type="email"  name = "email" value = {email} onChange = {this.handleInput} required/>
          {(email !== "" && emailError !== "") ?<span  style = {{backgroundColor:"#FFC0CB",fontSize: "1.3rem", borderRadius: "0.3rem"}}>{emailError}</span>: null}   
              </div>

        <div className="signuppassword">
         <label htmlFor="">Password</label>
          <input type="password"  name = "password" value = {password} onChange = {this.handleInput} required/>
         </div>

         <div className="terms-conditions">
           <p className = "selectbox flex"> 
           <input type="checkbox"/>
           I agree with all the terms and conditions </p>
          
          </div>
          <div className="Signup-button-heading">
           <button type = "submit">Sign Up</button>
           </div>
          </form> */}
         
      {/* </div>*/}
      </div> 
    );
  }
}

export default withRouter(SignupFormFields);
