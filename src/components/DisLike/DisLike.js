import React, { useState } from "react";
import "./DisLike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import AssumptionModal from "../Modal/AssumptionModal";
import CountModal from "../CountModal/CountModal";

const DisLike = (props) => {
  var { assumptionId, userId ,assumptionCredits,assumptionSupport} = props;

  const [modalShow, setModalShow] = useState(false);
  var [count, setCount] = useState(assumptionCredits[0].credit.count);
  var [countModal, setCountModal] = useState(false);

  var handleUpdatedCount = (updatedCount) => {
    setCount(updatedCount)
  }
  
  return (
    <div className="flex">
      <FontAwesomeIcon
        className="dislike"
        icon={faThumbsDown}
        size="1x"
        onClick={() => setModalShow(true)}
      />
      {modalShow && (
        <AssumptionModal
          show={modalShow}
          assumptionId={assumptionId}
          userId={userId}
          onHide={() => setModalShow(false)}
          handleUpdatedCount = {handleUpdatedCount}
        />
      )}

      <div onClick={() => setCountModal(true)} style ={{paddingLeft:"0.5rem" , transform:"translateY(0.01rem)"}}>{count}</div>
      {(countModal && assumptionSupport === false)&& (
        <CountModal show={countModal} onHide={() => setCountModal(false)} />
      )}
    </div>
  );
};

export default DisLike;
