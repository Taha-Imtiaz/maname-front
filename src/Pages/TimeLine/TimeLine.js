import React, { useEffect, useState } from "react";
import Posts from "../../components/Posts/Posts";
import { getUser, getAssumptions } from "../../API/axios";
import { Alert } from "react-bootstrap";
import "./TimeLine.css"


const TimeLine = (props) => {
  var { history } = props;
  // var [loginAlert,setLoginAlert] = useState(true)
  console.log("test");
  var sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
  console.log(sessionObj);
  if (sessionObj === null) {
    //checks user token in session storage
    history.push("/login");
  }

  if (sessionObj != null) {
    console.log(sessionObj._id);
    
    getUser(sessionObj._id)
      .then((response) => {
        sessionStorage.setItem(
          "responseObj",
          JSON.stringify(response.data.data)
        );
        //   history.push("/timeline");
        // console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   alert("User not found with the given crendentials");
  //   history.push("/signup")
  var assumptions = props.location.assumptions;
  console.log(assumptions);

  return (
    <div>
     
      <Posts assumptions={assumptions} />
    </div>
  );
};

export default TimeLine;
