import React, { useState } from 'react'
import "./Like.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp} from "@fortawesome/free-solid-svg-icons";

const Like = () => {
    const [likeCount, setLikeCount] = useState(0);
    return (
        <div className = "flex">
                <FontAwesomeIcon
                  className="like"
                  icon={faThumbsUp}
                  size="1x"
                  onClick={() => setLikeCount((prevState) => prevState + 1)}
                />
                {likeCount > 0 && (
                  <h3 style={{ marginLeft: "0.5rem", color: "#757575",fontSize: "1.3rem "}}>
                    {likeCount}
                  </h3>
                )}
              </div>
    )
}

export default Like
