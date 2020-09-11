import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = (props) => {
 var {login} = props;

    return (
        <nav className={`navbar navbar-expand-md navbar-light bg-light`}>
            <Link className="navbar-brand"to="#">
               maname.de </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
               
                <ul className="navbar-nav ml-auto">
                {login && (
                    <React.Fragment>
                    <li>
                        <Link className="nav-link flex" to="/userTimeline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link flex" to="/profile" >
                            User Profile
                        </Link>
                    </li>
                    </React.Fragment>
                    )}
                    <li>
                        <Link className="nav-link w-10 " to="/login" style = {{textDecoration:"none",color:"#fff"}} >
                          <button className= "loginbtn">LOGIN</button>
                        </Link>
                    </li>
                  
                </ul>
            </div>
        </nav>
     )
    
}

export default Navbar
