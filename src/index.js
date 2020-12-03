import React from "react"
import ReactDOM from "react-dom"
import Header from "./header"
import Card from "./body/card"
import "bootstrap/dist/css/bootstrap.min.css"
import "./app.css"

ReactDOM.render(
    <React.Fragment>
        <Header/>
        <Card />
    </React.Fragment>,
    document.getElementById("root")
);