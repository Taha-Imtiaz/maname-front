import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./AssumptionModal.css";
import { addReact, getUserAssumptions } from "../../API/axios";

var sessionObj = null;
var userCredits = null;
class AssumptionModal extends Component {
  state = {
    show: this.props.show,
    credit: {
      support: this.props.support === true ? true : false,
      count: "",
    },
    creditError: false,
  };
  componentDidMount = () => {
    sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
    console.log(sessionObj);
    userCredits = sessionObj.data.credits;
    console.log(userCredits);
  };

  //   var {assumptionId, userId,handleUpdatedCount, ...otherProps} = this.props;
  //   var { credit} = this.state;
  //  console.log(credit)

  //  var addReactObj = {
  //    id: assumptionId,
  //    reactor:userId,
  //     credit:{
  //       ...credit
  //     }
  //  }

  handleAddReact = (e) => {
    console.log("submit called");
    e.preventDefault();
    var {
      assumptionId,
      userId,
      handleUpdatedCount,
      assumption,
      ...otherProps
    } = this.props;
    var { credit } = this.state;
    console.log(credit);

    // console.log( assumption.credits.map((creditValue) => creditValue.reactor.credits)
    if (credit.count > userCredits) {
      // this.props.onHide();
      console.log("credit error");
      this.setState({
        creditError: true,
      });
      // this.props.onHide();
    } else {
      var addReactObj = {
        id: assumptionId,
        reactor: userId,
        credit: {
          ...credit,
        },
      };
      addReact(addReactObj).then((res) => {
        console.log(res);
        getUserAssumptions(addReactObj.reactor)
          .then((res) => {
            handleUpdatedCount(credit.count);
          })
          .catch((error) => {
            console.log(error);
          });

        this.props.onHide();
      });
    }

    // console.log(addReactObj)
  };
  handleFormInput = (value) => {
    console.log("function called");
    console.log(value);
    var { credit } = this.state;
    var { support } = credit;

    // console.log(count)
    // console.log(count)
    this.setState({
      credit: {
        count: value,
        support: support,
      },
    });
  };

  render() {
    // console.log(this.state.open);

    var { support, assumptionId, userId } = this.props;
    var {
      credit: { count },
      creditError,
    } = this.state;
    // var {count} =  credit
    console.log(count);
    return (
      <div>
        {creditError === true && (
          <Alert color="danger" className = "credit-alert flex">
          Please Enter valid credits
          </Alert>
        )}
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="style-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>
                How many credits you want to spent to{" "}
                {support ? "support" : "oppose"} this assumption
              </h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleAddReact}>
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter credits"
                  name="count"
                  value={count}
                  required
                  onChange={(e) => this.handleFormInput(e.target.value)}
                  dialogClassName="style-input"
                />
              </Form.Group>

              <Modal.Footer>
                <Button type="submit">Submit</Button>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AssumptionModal;
