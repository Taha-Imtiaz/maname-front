import React, { Component } from "react";
import PostItem from "../PostItem/PostItem";
import { getUserAssumptions, getAssumptions } from "../../API/axios";
import "./UserPosts.css";
import { withRouter } from "react-router-dom";

var userId = null;
class UserPosts extends Component {
  state = {
    assumption: [],
  };

  componentDidMount = () => {
    var { profile, assumptions } = this.props;
    var {
      history: {
        location: { pathname },
      },
    } = this.props;
    console.log(pathname);
    var sessionObj = JSON.parse(sessionStorage.getItem("responseObj"));
    console.log("posts");
    if (profile && sessionObj) {
      userId = sessionObj.data._id;
      console.log(userId);
      if (assumptions) {
        getUserAssumptions(userId).then((res) => {
          // var {data} = res
          // console.log(data)
          // {data.map((userAssumptionData) => console.log(userAssumptionData.credits))}
          this.setState({
            assumption: res.data,
          });
          console.log(res);
        });
      } else if (pathname === "/profile") {
        getUserAssumptions(userId).then((res) => {
          this.setState({
            assumption: res.data,
          });
        });
      } else {
        getAssumptions().then((res) => {
          this.setState({
            assumption: res.data,
          });
        });
      }
    }
  };
  //  else {
  //     getAssumptions().then((res) => {
  //         this.setState({
  //             assumption: res.data
  //         })
  //     })
  // }

  render() {
    var { assumption } = this.state;
    console.log(assumption);
    var {
      history: {
        location: { pathname },
      },
    } = this.props;
    console.log(pathname);
    return (
      <div
        className={pathname === "/profile" ? "profile-posts" : "timeline-posts"}
      >
        {pathname === "/profile"
          ? assumption.map((assumption, index) => {
              console.log(index, pathname);
              if (index < 3) {
                return (
                  <PostItem
                    assumption={assumption}
                    key={assumption._id}
                    userId={userId}
                    pathname={pathname}
                  />
                );
              }
            })
          : assumption.map((assumption, index) => {
                return (
                  <PostItem
                    assumption={assumption}
                    key={assumption._id}
                    userId={userId}
                    pathname={pathname}
                  />
                );
            })}
        
      </div>
    );
  }
}

export default withRouter(UserPosts);
