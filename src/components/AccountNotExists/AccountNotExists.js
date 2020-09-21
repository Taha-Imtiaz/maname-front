import React from 'react'
import { Link } from 'react-router-dom'
import "./AccountNotExists.css";

const AccountNotExists = () => {
    return (
        <div className="accountnotexist">
        <p style = {{display:"flex",alignItems:"center", justifyContent: "center"}}>
        <span>Dont have an account ?</span>
        <Link to = "/signup" style = {{textDecoration:"none",color: "#02C396"}} >
         Click here
         
        </Link>
        </p>
        </div>
    )
}

export default AccountNotExists
