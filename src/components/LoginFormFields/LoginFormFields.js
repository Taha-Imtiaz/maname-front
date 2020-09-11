import React, { Component } from 'react';
import "./LoginFormFields.css";
import { registerUser, loginUser } from '../../API/axios';
import { withRouter } from 'react-router-dom';

class LoginFormFields extends Component {
state = {
   username: '',
   
    password: ''
    
}
handleInput = (e) => {
    var {name,value} = e.target;
   
    this.setState({
        [name]: value
       
    })
}
handleFormSubmit = (e) => {
  var {username, password} = this.state
  var {history} = this.props
  e.preventDefault();
  var userObj = {
    username: username,
    password: password
  }

 loginUser(userObj, () => {
  history.push("/usertimeline")
})
}

  render() {
      var {username, password} = this.state;
    return (
      <div className = "login-container">
          <form onSubmit = {this.handleFormSubmit}>

          <div className="username">
              <label htmlFor="">Username</label>
            <input type="text"  name = "username" value = {username} onChange = {this.handleInput}/>
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
           <button type = "submit">Login</button>
           </div>
          </form>
         
      </div>
      
    );
  }
}

export default withRouter(LoginFormFields);
