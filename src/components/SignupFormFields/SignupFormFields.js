import React, { Component } from 'react';
import "./SignupFormFields.css";
import { registerUser } from '../../API/axios';
import { withRouter } from 'react-router-dom';

class SignupFormFields extends Component {
state = {
   username: '',
    email: '',
    password: ''
    
}
handleInput = (e) => {
    var {name,value} = e.target;
   
    this.setState({
        [name]: value
       
    })
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
      var {username, email, password} = this.state;
    return (
      <div className = "Signup-container">
          <form onSubmit = {this.handleFormSubmit}>

          <div className="username">
              <label htmlFor="">Username</label>
            <input type="text"  name = "username" value = {username} onChange = {this.handleInput}/>
              </div>

              <div className="email">
              <label htmlFor="">Email</label>
            <input type="email"  name = "email" value = {email} onChange = {this.handleInput}/>
              </div>

        <div className="password">
         <label htmlFor="">Password</label>
          <input type="password"  name = "password" value = {password} onChange = {this.handleInput}/>
         </div>

         <div className="terms-conditions">
           <p className = "selectbox flex"> 
           <input type="checkbox"/>
           I agree with all the terms and conditions </p>
          
          </div>
          <div className="Signup-heading">
           <button type = "submit">Sign Up</button>
           </div>
          </form>
         
      </div>
      
    );
  }
}

export default withRouter(SignupFormFields);
