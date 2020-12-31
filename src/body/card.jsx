import React from "react"
import AddTask from "./AddTask"
import Task from "./Task"
import { fetchTodoAction }  from "../redux/actions"
import { connect } from "react-redux";
import _ from "lodash"


class Card extends React.Component {

    componentDidMount(){
        this.props.fetchTodoAction()
    }

    render(){
        return (
            <React.Fragment>
                <div className="row">
                        <div className="col-md-8 offset-md-2 todo-card">
                            <h3 className="text-center">Let's see what you got to do</h3>
                            <AddTask />
                            {
                                //fetching Tasks from firebase
                                _.map(this.props.todos, (value,index) => {
                                    return(
                                        <Task key={index} todoId={index} task={value.todo} />
                                    )
                                })
                            }
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>{
    return { todos: state.fetchTodo}
}

export default connect(mapStateToProps, {fetchTodoAction})(Card)