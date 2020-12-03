import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"

export default function Header(){
    return (
        <div className="container text-center" style={{color:"#583d72"}}>
            <h1>THIS IS MY FIRST REACT APP</h1>
            <h3>HELL YEAH!!! THAT'S <strong>TODO</strong> </h3>
        </div>
    )
}