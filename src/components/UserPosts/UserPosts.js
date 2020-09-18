import React, { Component } from 'react';
import PostItem from '../PostItem/PostItem';
import { getUserAssumptions, getAssumptions } from '../../API/axios';
import "./UserPosts.css"
import { withRouter } from 'react-router-dom';

var userId = null
class UserPosts extends Component {

    state = {
        assumption: []
    }

    componentDidMount = () => {
      var {profile,assumptions} = this.props
        var sessionObj =   JSON.parse(sessionStorage.getItem("responseObj"))
        console.log("posts")
    if(profile && sessionObj) {
      userId =    sessionObj.data._id;
        console.log(userId)
        if(!assumptions) {
          getAssumptions().then((res) => {
                    
                    this.setState({
                        assumption: res.data
                    })
                })
            }
            else {
              getUserAssumptions(userId).then((res)=> {
                var {data} = res
                console.log(data)
                // {data.map((userAssumptionData) => console.log(userAssumptionData.credits))}
                  this.setState({
                      assumption: res.data
                  }) 
                  console.log(res)
              })
            }
        }
       
    // } else {
    //     getAssumptions().then((res) => {
    //         this.setState({
    //             assumption: res.data
    //         })
    //     })
    // }
  }


  render() {
    var {assumption} = this.state
   
   var {history:{location:{pathname}}} = this.props
   console.log(pathname)
    return (
        <div className = {pathname === "/profile" ? "profile-posts" : "timeline-posts"}>
        {
          assumption.map((assumption) =>{
        return   <PostItem assumption = {assumption} key = {assumption._id} userId = {userId}/>
        
       
          })
         
        }
      </div>
    );
  }
}

export default withRouter(UserPosts);
