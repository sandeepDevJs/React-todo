import React from 'react'
import { connect } from "react-redux";
import { googleAuth } from "../redux/actions/auth";

function Index(props) {
    //if already logged in then show logOut Btn
    let Authbtn = (!props.isLoggedIn) ?
        (
            <button 
            className="btn btn-primary my-2 my-sm-0" 
            style={{color:"white", border:"1px solid white"}}
            onClick={() => props.googleAuth()}

            >Login</button>
        ):
        (
            <button 
            className="btn btn-primary my-2 my-sm-0" 
            style={{color:"white", border:"1px solid white"}}

            >Log Out</button>   
        )
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#98acf8"}}>
            <a className="navbar-brand" href="/">TODO APP</a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* This left blank intetionally!! */}
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    {
                        //login logout btn
                        Authbtn
                    }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return { isLoggedIn : state.isLoggedIn}
}

export default connect(mapStateToProps, {googleAuth})(Index)