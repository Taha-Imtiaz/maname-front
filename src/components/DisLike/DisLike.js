import React, { useState } from 'react'
import "./DisLike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const DisLike = () => {
    const [dislikeCount, setDisLikeCount] = useState(0);
    
    return (
        <div className = "flex">
                <FontAwesomeIcon
                  className="dislike"
                  icon={faThumbsDown}
                  size="1x"
                  onClick={() =>setDisLikeCount((prevState) => prevState + 1)}
                />
                {dislikeCount > 0 && (
                  <h3 style={{ marginLeft: "0.5rem", color: "#757575" }}>
                    {dislikeCount}
                  </h3>
                )}
              </div>
    )
}

export default DisLike
