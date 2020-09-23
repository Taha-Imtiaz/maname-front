import React, { useState, useEffect } from "react";
import "./DisLike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import AssumptionModal from "../Modal/AssumptionModal";
import CountModal from "../CountModal/CountModal";
import { Alert } from "reactstrap";
const DisLike = (props) => {
  var {
    assumptionId,
    userId,
    assumptionCredits,
    assumptionSupport,
    assumption,
  } = props;

  const [modalShow, setModalShow] = useState(false);
  var [count, setCount] = useState(0);
  var [countModal, setCountModal] = useState(false);
  var [showAlert, setShowAlert] = useState(false)

  var supports = assumption.credits.filter((x) => x.credit.support === false);
  console.log(assumption);
  console.log(supports);
  console.log(supports.length);

  useEffect(() => {
    setCount(supports.length);
  }, []);

  // var  displayAlert = () =>{
  //   <Alert color="primary">
  //   This is a primary alert — check it out!
  // </Alert>
  // }

  var openModal = () => {
    let index = assumption.credits.findIndex((x) => x.reactor._id == userId);
    if (index == -1) {
      setModalShow(true);
    } else {
      setShowAlert(true)
      setModalShow(false);
    }
  };
  var handleUpdatedCount = (updatedCount) => {
    window.location.reload();
  };
  // var {supports} = state
  return (
    <div className="flex">
      <FontAwesomeIcon
        className="dislike"
        icon={faThumbsDown}
        size="1x"
        onClick={openModal}
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
        style={{ paddingLeft: "0.5rem", transform: "translateY(0.01rem)", cursor: 'pointer'}}
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
      {/* {
  showAlert === true &&   
  <div>
  <Alert color="primary" style = {{display:"block", width: "20rem", height: "100%"}}>
  This is a primary alert — check it out!
</Alert></div>
} */}
    </div>
  );
};

export default DisLike;
