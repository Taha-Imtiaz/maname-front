import React from 'react'
import Posts from '../../components/Posts/Posts'
import { getUser } from '../../API/axios'


const TimeLine = (props) => {
    var {history} = props
     var sessionObj = JSON.parse(sessionStorage.getItem("responseObj"))
  if(sessionObj === null) {
      //checks user token in session storage
    history.push("/login")
  }

  if(sessionObj != null) {
        console.log(sessionObj.data._id);
  return   getUser(sessionObj.data._id).then((response) => {
        history.push("/timeline")
      }).catch((error) => {
          console.log(error)
      })
  }
  
      alert("User not found with the given crendentials");
      history.push("/signup")
  
  

    return (
        
        
        <div>
         
            <Posts/>
        </div>
    )
}

export default TimeLine
