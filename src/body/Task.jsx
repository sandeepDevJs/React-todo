import React from "react"
import { deleteTodo, updateTodo } from "../redux/actions"
import { connect } from "react-redux"
class Task extends React.Component {

    constructor(props){
        super(props)
        this.state={
            todoText:this.props.task
        }
    }

    hitUpdate = () => {
        this.props.updateTodo(this.props.todoId, {todo:this.state.todoText})
        alert("updated!!")
    }

    render(){
        return (
            <div className="offset-md-3 task">

                <div className="row">
                          <input type="text"
                                value={this.state.todoText}
                                onChange={ e => this.setState({todoText: e.target.value}) }
                          />
                          <button className="btn btn-info" onClick={this.hitUpdate}>
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


export default connect(null, {deleteTodo, updateTodo})(Task)