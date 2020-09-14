import React from "react";
import "./TagsListItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

const TagsListItem = props => {
 var {label, handleTagsDelete} = props
 console.log(label)
  return (
    
    <div style = {{borderBottom:"1px solid #02C396",marginRight:"0.5rem",display:"flex"}} className = "taglistitem">
      
     <span style = {{fontSize: "1.5rem",marginRight:"0.5rem"}} > {label.tagValue}</span>
      <FontAwesomeIcon icon = {faTimes} style = {{marginRight:"1rem"}} onClick ={()=>handleTagsDelete(label.tagId)}>Delete</FontAwesomeIcon>
      
    </div>
  );
};

export default TagsListItem;
