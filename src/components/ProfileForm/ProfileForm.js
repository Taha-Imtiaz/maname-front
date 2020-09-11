import React, { Component } from 'react'
import "./ProfileForm.css"

 class ProfileForm extends Component {
     state = {
         name:''
     }
     handleFormInput = (e) => {
         var {name, value} =e.target;
        //  console.log(value)
         this.setState({
             [name]:value
         })
     }
    render() {
        var {name} = this.state;

        return (
            <div className = "profile-form-container">
                 <div className="form-field">
                  
                      
                       <div className ="name flex" style = {{flexFlow:"column",alignItems:"start"}}>
                           <label htmlFor="">Name</label>
                           <input type="text" name = "name" value = {name} onChange = {this.handleFormInput}/>
                          
                       </div>

                       <div className="email flex" style = {{flexFlow:"column",alignItems:"start"}} >
                          <label className = "flex">test1@gmail.com</label>
                       </div>
                       <div className = "credit flex" style = {{flexFlow:"column",alignItems:"start"}}>
                           <label className = "flex" htmlFor="">3000</label>
                       </div>
                       <div className = "membership-date flex" style = {{flexFlow:"column",alignItems:"start"}}>
                          <label className = "flex" htmlFor="">20-Sep-2020</label>
                           
                       </div>
                      
                  
                </div>
            </div>
        )
    }
}

export default ProfileForm
