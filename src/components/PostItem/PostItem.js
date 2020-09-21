import React from "react";
import "./PostItem.css";
import Like from "../Like/Like";
import DisLike from "../DisLike/DisLike";



const PostItem = (props) => {
  var {assumption,userId} = props;
  console.log(assumption)
  console.log(assumption._id, userId)
  // console.log(assumption.credits)
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
              <h3 style = {{color:"#a0a0a0"}}>{assumption.timestamp}</h3>
            </div>
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
