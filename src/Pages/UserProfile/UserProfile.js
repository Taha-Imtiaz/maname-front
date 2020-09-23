import React, {useEffect} from 'react'
import Profile from '../../components/Profile/Profile'
import { getUser, getUserAssumptions } from '../../API/axios'

const UserProfile = (props) => {
 
    var {history} = props
    var sessionObj = JSON.parse(sessionStorage.getItem("responseObj"))
 if(sessionObj === null) {
     //checks user token in session storage
   history.push("/login")
 }

 if(sessionObj != null) {
       // console.log(sessionObj.data._id);
  getUser(sessionObj._id).then((response) => {
      //  history.push("/profile")
     }).catch((error) => {
         console.log(error)
     })
 }
 
  
   
  
    return (
        <div>
            <Profile/>
        </div>
    )
}

export default UserProfile
