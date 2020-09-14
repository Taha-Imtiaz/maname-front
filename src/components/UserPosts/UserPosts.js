import React, { Component } from 'react';
import PostItem from '../PostItem/PostItem';
import { getUserAssumptions, getAssumptions } from '../../API/axios';
import "./UserPosts.css"
class UserPosts extends Component {

    state = {
        assumption: []
    }

    componentDidMount = () => {
      var {profile} = this.props
        var sessionObj =   JSON.parse(sessionStorage.getItem("responseObj"))
        console.log("posts")
    if(profile && sessionObj) {
        var userId = sessionObj.data._id;
        console.log(userId)
        getUserAssumptions(userId).then((res)=> {
            this.setState({
                assumption: res.data
            }) 
            console.log(res)
        })
    } else {
        getAssumptions().then((res) => {
            this.setState({
                assumption: res.data
            })
        })
    }
  }


  render() {
    var {assumption} = this.state
    return (
        <div className = "user-posts ">
        {
          assumption.map((assumption) =>{
        return   <PostItem assumption = {assumption} key = {assumption._id}/>
        
       
          })
         
        }
      </div>
    );
  }
}

export default UserPosts;
