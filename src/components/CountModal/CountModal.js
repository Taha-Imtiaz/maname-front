import React from 'react'
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./CountModal.css"
import { addReact } from '../../API/axios';

const CountModal = (props) => {
  var { count, handleUpdatedCount, assumptionCredits, supports, assumption } = props
  console.log(supports)

  var { assumptionId, userId, ...otherProps } = props;
  //     var { credit} = this.state;

  var addReactObj = {
    id: assumptionId,
    reactor: userId,
    credit: {
      ...assumptionCredits
    }
  }

  console.log(addReactObj)

  // console.log(assumptionCredits)
  //  var handleAddReact = (e) => {
  //     console.log("submit called")
  //     e.preventDefault();
  //     var {assumptionId, userId, ...otherProps} = props;
  //     var { credit} = this.state;
  //  console.log(credit)


  // addReact(addReactObj).then((res) => {
  //  handleUpdatedCount(credit.count)
  //   props.onHide()
  // }).catch((error)=>{
  //   console.log(error)
  // }) 


  // }
  //  var handleFormInput = (value) => {
  //     console.log("function called")
  //     console.log(value)
  //      var {credit} = this.state;
  //      var {support} = credit
  //     // console.log(count)
  //     // console.log(count)
  //     this.setState({
  //     credit: {
  //       count: value,
  //       support: support
  //     }
  //     })
  //   }

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="count-modal"
      >
        <Modal.Header closeButton >
          <Modal.Title id="contained-modal-title-vcenter" >
            <h2>All Reacts</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul style={{ listStyle: "none" }}>
            {supports.map((supportArr) =>
              <li>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <img src={assumption.owner.imageUrl} style={{ width: "5rem", height: "5rem", borderRadius: "50%" }} />
                    </div>
                    <div class="col-5">
                      <h2>{supportArr.reactor.username}</h2>
                    </div>
                    <div class="col-3">
                      <h2>{supportArr.credit.count}</h2>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </li>
            )}
          </ul>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CountModal
