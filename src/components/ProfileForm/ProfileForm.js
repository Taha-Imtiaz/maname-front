import React, { Component } from 'react'
import "./ProfileForm.css"

 var sessionObj = null
 class ProfileForm extends Component {
    

     componentDidMount = () => {
       
            sessionObj = JSON.parse(sessionStorage.getItem("responseObj"))
            console.log(sessionObj)
            if(sessionObj) {
           var userId = sessionObj._id;
           console.log(sessionObj.data)
           this.setState({
               name: sessionObj.username,
               email:sessionObj.email,
               credits: sessionObj.credits,
               memberSince:sessionObj.memberSince

           })
        }     
     };
     state = {
        name:'',
        email:'',
        credits:'',
        memberSince:''
    }
     
     handleFormInput = (e) => {
         var {name,value} =e.target;
        this.setState({
            [name]:value
        })
         
      
     }
    render() {
        var {name,email,credits,memberSince} = this.state;

        return (
            <div className = "profile-form-container">
                 <div className="form-field">
                  
                      
                       <div className ="name flex" style = {{flexFlow:"column",alignItems:"start"}}>
                           <label htmlFor="">{name}</label>
                           {/* <input type="text" name = "name" value = {name} onChange = {this.handleFormInput}/> */}
                          
                       </div>

                       <div className="email flex" style = {{flexFlow:"column",alignItems:"start"}} >
                          <label className = "flex">{email}</label>
                       </div>
                       <div className = "credit flex" style = {{flexFlow:"column",alignItems:"start"}}>
                           <label className = "flex" htmlFor="">{credits}</label>
                       </div>
                       <div className = "membership-date flex" style = {{flexFlow:"column",alignItems:"start"}}>
                          <label className = "flex" htmlFor="">{memberSince.split("T")[0]}</label>
                           
                       </div>
                      
                  
                </div>
            </div>
        )
    }
}

export default ProfileForm
