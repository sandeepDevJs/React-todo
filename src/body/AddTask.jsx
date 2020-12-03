import React from "react"

export default function AddTask(){

    return(
            <form className="form-inline">
                <div className="form-group offset-md-4">
                    <input type="text" className="form-control" placeholder="Ask her out" aria-label="Large"/>
                    <button type="button" className="btn btn-primary">ADD</button>
                </div>
            </form>
    )

}