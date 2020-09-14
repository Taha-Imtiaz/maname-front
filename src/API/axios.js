import { Redirect } from "react-router-dom";

const axios = require("axios");

export var registerUser = async (data, callback) => {
  console.log(data);
  try {
    var response = await axios.post( "https://manamede.herokuapp.com/api/register", data);
    console.log(response.data);
    //add data to session storage
    sessionStorage.setItem(
      "responseObj",
      JSON.stringify({
        data: response.data.data,
        token:response.data.data.token
      })
    );

    //redirect to assumptions
    callback();
  } catch (error) {
    console.log(error);
  }
};
export var loginUser = async (data, callback) => {
  try {
    var response = await axios.post(
      "https://manamede.herokuapp.com/api/login",
      data
    );
    console.log(response.data.token);

    //add data to session storage
    sessionStorage.setItem(
      "responseObj",
      JSON.stringify({
        data: response.data.data,
        token:response.data.token
      })
    );
    //redirect to assumptions
    callback();
  } catch (error) {
    console.log(error);
  }
};
export var addAssumptions = async (assumptionObj, callback) => {
  var response = await axios.post("https://manamede.herokuapp.com/api/add-assumption",  assumptionObj);
  // console.log(response)
  callback();
};

export var getUserAssumptions = async (userId) => {
    try {
       var response = await axios.get(`https://manamede.herokuapp.com/api/get-users-assumption/${userId}`)
      return response.data
    } catch (error) {
    console.log(error)    
    }
    
}
export var getAssumptions = async () => {
    try {
       var response = await axios.get(`https://manamede.herokuapp.com/api/get-assumption`)
      return response.data
    } catch (error) {
    console.log(error)    
    }
    
}
export var getUser = async (userId) => {
    try {
       var response = await axios.get(`https://manamede.herokuapp.com/api/get-data/${userId}`)
       return response
    } catch (error) {
    console.log(error)    
    }
    
}
