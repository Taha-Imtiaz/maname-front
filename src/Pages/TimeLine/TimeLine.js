import React, { useEffect } from "react";
import Posts from "../../components/Posts/Posts";
import { getUser, getAssumptions } from "../../API/axios";

const TimeLine = (props) => {
 
  var { history } = props;
  console.log("test");
  var sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
  console.log(sessionObj);
  if (sessionObj === null) {
    //checks user token in session storage
    history.push("/login");
  }

  if (sessionObj != null) {
    console.log(sessionObj.data._id);
    getUser(sessionObj.data._id)
      .then((response) => {
        //   history.push("/timeline");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   alert("User not found with the given crendentials");
  //   history.push("/signup")
  var assumptions = props.location.assumptions;
  console.log(assumptions)

  return (
    <div>
      <Posts assumptions = {assumptions}/>
    </div>
  );
};

export default TimeLine;
