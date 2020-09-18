import React from 'react'
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "./CountModal.css"
import { addReact } from '../../API/axios';

const CountModal = (props) => {
  var {count,handleUpdatedCount,assumptionCredits, supports} = props
  console.log(supports)

  // console.log(assumptionCredits)
 var handleAddReact = (e) => {
    console.log("submit called")
    e.preventDefault();
    var {assumptionId, userId, ...otherProps} = props;
    // var { credit} = this.state;
  //  console.log(credit)
   
   var addReactObj = {
     id: assumptionId,
     reactor:userId,
      credit:{
        ...assumptionCredits
      }
   }
   
  console.log(addReactObj)
  addReact(addReactObj).then((res) => {
  //  handleUpdatedCount(credit.count)
    props.onHide()
  }).catch((error)=>{
    console.log(error)
  }) 

  
  }
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
            <Modal.Title id="contained-modal-title-vcenter">
          {supports.map((supportArr) =>
          <div>
          <ul style = {{listStyle:"none",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <li>
           
            <img src={supportArr.reactor.imageUrl} style = {{width:"5rem",height: "5rem", borderRadius:"50%"}}alt=""/>
          <h2 style = {{}}>{supportArr.credit.count }</h2>
          <h2>{supportArr.reactor.username}</h2>
          </li>
          </ul>
          </div>
          )}
          {/* <h4 className = "flex">{`Count ${count}`}</h4> */}
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <Form onSubmit ={handleAddReact} >
              <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> 
                <Form.Control type="text" placeholder="Enter credits" name = "count" value = {count} required  onChange = {(e) =>  handleFormInput(e.target.value)}  dialogClassName= "count-input"/> 
                 */}
               </Form.Group>
              
              <Modal.Footer> 
              <Button  type = "submit">Submit</Button>
            <Button onClick={props.onHide}>Close</Button>
           
          </Modal.Footer> 
             </Form>
         
        
          </Modal.Body>
        </Modal>
        </div>
    )
    }

export default CountModal
