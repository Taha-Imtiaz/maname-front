import React from 'react'
import TagsListItem from '../TagsListItem/TagsListItem'
import "./TagsList.css"

const TagsList = (props) => {
  var {labels,handleTagsDelete} = props
  
  return (
      
        <div  className = "taglist">
          { labels.map((label)=>
          <TagsListItem label = {label} key = {label.tagId}
         handleTagsDelete = {handleTagsDelete} />)}
        </div>
    )
}

export default TagsList
