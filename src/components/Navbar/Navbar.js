import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
    // constructor(props) {
    // super(props);
    // this.closenav = this.closenav.bind(this);
    // }
  state = {
    navToggle: false,
  };

  closenav = () => {
      console.log("Hello")
    this.setState({
      navToggle: !this.state.navToggle,
    });
  };
  render() {
    var { login } = this.props;
    var { navToggle } = this.state;
    const show = (this.state.navToggle) ? "show" : "" ;

    return (
      <nav className={`navbar navbar-expand-md navbar-light bg-light`}>
        <Link className="navbar-brand" to="#">
          maname.de{" "}
        </Link>
        <button
          className="navbar-toggler"
        //   data-toggle="collapse"
        //   data-target="#navbarNav"
          onClick={ this.closenav }
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${show}`}
          id="navbarNav"
        >
          
            <ul className="navbar-nav ml-auto">
              {login && (
                <React.Fragment>
                  <li   onClick={ this.closenav }>
                    <Link
                      className="nav-link flex"
                      to="/timeline"
                      
                    >
                      {/* <a href = "#" data-toggle="collapse"> */}
                      Home
                      {/* </a> */}
                    </Link>
                  </li>
                  <li  onClick={ this.closenav } >
                    <Link
                      className="nav-link flex"
                      to="/profile"
                     
                    >
                      {/* <a href="#" data-toggle="collapse"> */}
                      User Profile
                      {/* </a> */}
                    </Link>
                  </li>
                </React.Fragment>
              )}
              <li   onClick={ this.closenav }>
                <Link
                  className="nav-link w-10 "
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                
                >
                  {/* <a href="#" data-toggle="collapse"> */}
                  <button className="loginbtn flex">LOGIN</button>

                  {/* </a> */}
                </Link>
              </li>
            </ul>
          
        </div>
      </nav>
    );
  }
}
export default Navbar;
