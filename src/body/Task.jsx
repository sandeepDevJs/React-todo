import React from "react"

export default function Task(prop) {
    return (
            <div className="offset-md-3 task">

                <div className="row">
                    <div class="col-md-8 task">
                          <input type="text"
                                 placeholder={prop.task}
                          />
                          <button className="btn btn-danger" >
                              DELETE
                          </button>
                    </div>
                </div>
                
            </div>
    )
}

<button>Heelo</button>