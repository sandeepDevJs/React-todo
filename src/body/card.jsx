import React from "react"
import AddTask from "./AddTask"
import Task from "./Task"

export default function Card() {
    return (
        <React.Fragment>
            <div className="row">
                    <div className="col-md-8 offset-md-2 todo-card">
                        <h3 className="text-center">Let's see what you got to do</h3>
                        <AddTask />
                        <Task task="Ask Her Out &#10084;"/>
                        <Task task="Have A Candle Night Dinner &#10084;"/>
                    </div>
                </div>
        </React.Fragment>
    );
}