import React from "react"
import { deleteTodo } from "../redux/actions"
import { connect } from "react-redux"
class Task extends React.Component {
    render(){
        return (
            <div className="offset-md-3 task">

                <div className="row">
                          <input type="text"
                                value={this.props.task}
                          />
                          <button className="btn btn-info" >
                              UPDATE
                          </button>
                          <button className="btn btn-danger" onClick={() => this.props.deleteTodo(this.props.todoId)} >
                              DELETE
                          </button>
                </div>
                
            </div>
        )
    }
}


export default connect(null, {deleteTodo})(Task)