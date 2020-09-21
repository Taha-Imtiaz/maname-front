import React, { useState, useEffect } from "react";
import "./DisLike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import AssumptionModal from "../Modal/AssumptionModal";
import CountModal from "../CountModal/CountModal";

const DisLike = (props) => {
  var {
    assumptionId,
    userId,
    assumptionCredits,
    assumptionSupport,
    assumption,
  } = props;

  const [modalShow, setModalShow] = useState(false);
  var [count, setCount] = useState("");
  var [countModal, setCountModal] = useState(false);

  var supports = assumption.credits.filter((x) => x.credit.support === false);
  console.log(supports);
  console.log(supports.length);

  useEffect(() => {
    setCount(supports.length);
  }, []);

  var handleUpdatedCount = (updatedCount) => {
    window.location.reload();
  };

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
          support={false}
          onHide={() => setModalShow(false)}
          handleUpdatedCount={handleUpdatedCount}
        />
      )}

      <div
        onClick={() => setCountModal(true)}
        style={{ paddingLeft: "0.5rem", transform: "translateY(0.01rem)" }}
      >
        {count}
      </div>
      {countModal && (
        <CountModal
          show={countModal}
          count={count}
          supports={supports}
          assumptionCredits={assumptionCredits}
          assumptionId={assumptionId}
          userId={userId}
          assumption={assumption}
          onHide={() => setCountModal(false)}
        />
      )}
    </div>
  );
};

export default DisLike;
