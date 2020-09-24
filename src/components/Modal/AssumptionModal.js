import React, { Component } from "react";
import { Button, Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./AssumptionModal.css";
import { addReact, getUserAssumptions } from "../../API/axios";

var sessionObj = null;
var userCredits = null;
class AssumptionModal extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
    console.log(sessionObj);
    userCredits = sessionObj.credits;
    console.log(userCredits);
    this.credits = userCredits;
  }

  state = {
    show: this.props.show,
    backdrop: true,
    credit: {
      support: this.props.support === true ? true : false,
      count: "",
    },
    creditError: false,
  };
  componentDidMount = () => {

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
        backdrop: false
      });
      setTimeout(() => {
        // this.props.onHide()
        this.setState({
        creditError: false,
        backdrop: true
        })
      }, 2500);
      // this.props.handleCreditError(this.state.creditError)
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
      backdrop
    } = this.state;
    // var {count} =  credit
    console.log(count);
    return (
      <div>
        {creditError === true && (
          <Alert color="danger" className="credit-alert flex">
            Please Enter valid credits

          </Alert>
        )}
        <Modal
          {...this.props}
       backdrop={backdrop} 
      //  fade={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          dialogClassName="style-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <h4>
                How many credits you want to spent to{" "}
                {support ? "support" : "oppose"} this assumption? You have {this.credits} credits remaining.
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
