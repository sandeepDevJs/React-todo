import React from 'react'


export default function index() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: "#98acf8"}}>
            <a className="navbar-brand" href="/">TODO APP</a>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* This left blank intetionally!! */}
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <button className="btn btn-primary my-2 my-sm-0" style={{color:"white", border:"1px solid white"}}>Login</button>
                </div>
            </div>
        </nav>
    )
}
