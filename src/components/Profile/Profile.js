import React, { useEffect, useRef } from "react";
import "./Profile.css";
import image2 from "../../images/image2.jpg";
import ProfileForm from "../ProfileForm/ProfileForm";
import PostItem from "../PostItem/PostItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCamera } from "@fortawesome/free-solid-svg-icons";
import { Link, withRouter } from "react-router-dom";
import Posts from "../Posts/Posts";
import UserPosts from "../UserPosts/UserPosts";
import { useState } from "react";
import { uploadImage } from "../../API/axios";

var sessionObj = null;
const Profile = (props) => {
  var { history } = props;
  var [image, setImage] = useState("");
  const inputFile = useRef(null);
  
  useEffect(() => {
    sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
    if (!sessionObj) {
      history.push("/login");
    }
    if (sessionObj) {
      var userId = sessionObj._id;
      console.log(sessionObj.data);
      setImage(sessionObj.imageUrl);
    }
  }, []);
 
 
  var openFileMenu = (e) => {
    // `current` points to the mounted file input element
    var selectedImage = inputFile.current.click();
    // selectedImage.src = URL.createObjectURL(e.target.files[0]);
    // setImage(URL.createObjectURL(e.target.files[0]))
  };
  
  var onImageChange = (event) => {
    var userId = sessionObj._id;
    var imageSelected = event.target.files[0]
    let formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("id", userId);
    if (event.target.files && imageSelected) {
        uploadImage(formData).then((res) => {
            console.log(res)
            setImage(URL.createObjectURL(imageSelected));
            console.log(res.data.data)
          sessionObj =   sessionStorage.setItem("responseObj",JSON.stringify(res.data.data))
           console.log(sessionObj)
            window.location.reload()
            console.log("Image uploaded successfully")
            
        }).catch((error) => {
            console.log(error)
        })
        // setImage(URL.createObjectURL(imageSelected) )
    }
}

  return (
    <div>
      <div className="postbtnicon flex">
        <Link to="/addassumption">
          <FontAwesomeIcon icon={faPlus} style={{ color: "#fff" }} size="3x" />
        </Link>
      </div>
      <div className="user-profile">
        <div className="profile">
          <div className="contact-area">
            <div className="profile-image-heading flex">
              <h1 className="profileheading">Profile Image</h1>

              <h2 className="postbutton">
                <Link
                  to="/addassumption"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  ADD POST
                </Link>
              </h2>
            </div>
            <div className="profile-pic flex ">
              
              <img src={image} alt="" className = "image"/>
              <input 
                type="file"
                className="fileLoader"
                ref={inputFile}
                name="files"
                title="Load File"
                onChange={onImageChange}
                accept="image/png, image/jpeg, image/jpg"
              />
              <FontAwesomeIcon style = {{margin:"1rem",padding: "0.3rem"}} className = "camera-icon"
                icon={faCamera}
                size="2x"
                onClick={openFileMenu}
              />
              {/* <input type="file"/> */}
            </div>
            <div className="form">
              <ProfileForm />
            </div>
            <div className="assumption-heading">
              <h2 className="myassumption">My Assumptiopns</h2>
              <Link
                to={{
                  pathname: "/timeline",
                  assumptions: {
                    showAllAssumptions: true,
                  },
                }}
                className="allassumption"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <h2>See All Assumptions</h2>
              </Link>
            </div>
          </div>
          {/* <hr/> */}
          <div className="assumptions">
            <UserPosts profile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Profile);
