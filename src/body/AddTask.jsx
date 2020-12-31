import React from "react"
import { createNote } from "../redux/actions"
import { connect } from "react-redux"

class AddTask extends React.Component {
 
    constructor(props){
        super(props)
        this.state = {
            todo : ""
        }
    }

    submitHandler = (e) =>{
        e.preventDefault()
        let data = {
            todo: this.state.todo
        }
        this.props.createNote(data)
        //empty textbox after ADD
        this.setState({todo:""})
    }

    render(){
        return(
            <form className="form-inline" onSubmit={this.submitHandler} >
                <div className="form-group offset-md-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Todo.." 
                        value={this.state.todo} 
                        onChange={ e => this.setState({ todo: e.target.value }) }
                        aria-label="Large"
                    />
                    <button type="submit" className="btn btn-primary">ADD</button>
                </div>
            </form>
        )
    }

}

export default connect(null, {createNote})(AddTask)
