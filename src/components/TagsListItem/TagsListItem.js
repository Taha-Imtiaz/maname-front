import React from "react";
import "./TagsListItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

const TagsListItem = props => {
 var {label, handleTagsDelete} = props
 console.log(label)
  return (
    
    <div  className = "taglistitem flex">
      
     <input style = {{fontSize: "1.5rem",border:"1px solid #02C396",textIndent:"1rem"}} value = {`${label.tagValue}`}></input>
      <FontAwesomeIcon icon = {faTimes}  className = "close-icon" onClick ={()=>handleTagsDelete(label.tagId)}>Delete</FontAwesomeIcon>
      
    </div>
  );
};

export default TagsListItem;
