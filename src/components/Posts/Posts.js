import React, { Component } from 'react'
import "./Posts.css"
import PostItem from '../PostItem/PostItem'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getAssumptions, getUserAssumptions } from '../../API/axios'


class Posts extends Component {
    state = {
        assumption: []
    }

    componentDidMount = () => {
        var sessionObj =   JSON.parse(sessionStorage.getItem("responseObj"))
    if(sessionObj) {
        var userId = sessionObj.data._id;
        console.log(userId)
        getUserAssumptions(userId).then((res)=> {
            this.setState({
                assumption: res.data
            }) 
            // console.log(res)
        })
    } else {
        getAssumptions().then((res) => {
            this.setState({
                assumption: res.data
            })
        })
    }
     
}

    render () {
var {assumption} = this.state
// console.log(assumption)
    return (
        <div>
        <div className="postbtnicon flex">
            <Link to = "/addassumption">
      <FontAwesomeIcon icon = {faPlus} style = {{color:"#fff"}} size = "3x"/>
      </Link>
        </div>
        <div className = "posts-container">
            <div className="posts flex">
              {
                assumption.map((assumption) =>{
              return    <PostItem assumption = {assumption} key = {assumption._id}/>
                })
               
              }
            </div>
            <div className="postbtn">
                <Link to = "/addassumption" style = {{textDecoration:"none"}}>
                <h1>Add Post</h1>
                </Link>
            </div>
        </div>
        </div>
    )
}
}
export default Posts
