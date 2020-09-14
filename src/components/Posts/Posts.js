import React, { Component } from 'react'
import "./Posts.css"
import PostItem from '../PostItem/PostItem'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getAssumptions, getUserAssumptions } from '../../API/axios'
import UserPosts from '../UserPosts/UserPosts'


class Posts extends Component {
  

    render () {

// console.log(assumption)
    return (
        <div>
        <div className="postbtnicon flex">
            <Link to = "/addassumption">
      <FontAwesomeIcon icon = {faPlus} style = {{color:"#fff"}} size = "3x"/>
      </Link>
        </div>
        <div className = "posts-container">
            <div className="posts">
            <UserPosts/>
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
