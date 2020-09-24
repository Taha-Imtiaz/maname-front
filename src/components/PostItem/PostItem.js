import React, { useState, useEffect } from "react";
import "./PostItem.css";
import Like from "../Like/Like";
import DisLike from "../DisLike/DisLike";
import { getAssumptions } from "../../API/axios";
import { Link } from "react-router-dom";



const PostItem = (props) => {
  var {assumption,userId} = props;
  // var [addTags, setAddTags] = useState('')
//   useEffect(() => {
//   getAssumptions().then((res)=> {
//     console.log(res.data)
//  var labelArray =  res.data.labels.map((tag) => tag.labels)
//  console.log(labelArray)
//   }).catch((error) => {
//     console.log(error)
//   })
//   }, [])

  console.log(assumption)
  console.log(assumption._id, userId)
  console.log(assumption.labels.length)
  return (
    <div>
      <div className="grid">
        <article>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={assumption.owner?.imageUrl}
              alt=""
              style={{ gridColumn: "1/span 2", margin: "1rem" }}
            />
            <div className="post-detail" style={{ marginLeft: "1rem" , fontFamily: "Nunito", fontSize: "1.2rem", color:"#111111"}}>
              <h2>{assumption.owner?.username}</h2>
              <h3 style = {{color:"#a0a0a0"}}>{assumption.plainTime.split("G")[0]}</h3>
            </div>
          </div>
         <div className="hash-tags tag-styles">
     {assumption.labels.length > 0 && 
     assumption.labels.map((labelArr) => <Link style = {{textDecoration: "none", color:"#02C396", margin:"0 0.5rem", fontSize: "1.3rem"}} >{`#${labelArr.tagValue}`}</Link> )
     }
         </div>
          <div className="text">
            <h3>{assumption.title}</h3>
            <h3>{assumption.description}</h3>
            <article>
              <p>
               {assumption.detailDescription}
              </p>
            </article>
            <div className="thumbs">
              <div
                className="flex like-icon"
                style={{ justifyContent: "start", marginTop: "0.5rem" }}>
                    <Like assumptionId = {assumption._id} assumption = {assumption} assumptionCredits = {assumption.credits} assumptionSupport = {assumption.credits[0].credit.support} userId = {userId}/>
              </div>

              <div
                className="flex dislike-icon"
                style={{ justifyContent: "start", marginTop: "0.5rem" }}>
               <DisLike assumptionId = {assumption._id} assumption = {assumption} userId = {userId}  assumptionCredits = {assumption.credits} assumptionSupport = {assumption.credits[0].credit.support}/>
              </div>
            </div>
          </div>
        </article>
      </div>

    </div>
  );
};

export default PostItem;
