import React, { Component } from 'react'
import "./Todo.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false, todo: this.props.todo}
    }

    handleRemove = () => {
        this.props.remove(this.props.id);
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.setState.isEditing})
    }

    handleUpdate = (e) => {
        e.preventDefault();
        this.props.edit(this.props.id, this.state.todo);
        this.setState({ isEditing: false });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleToggle = (e) => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if(this.state.isEditing) {
          result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                    <input 
                        type="text"  
                        value={this.state.todo}
                        name="todo"
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
          );
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"}
                        onClick={this.handleToggle}>
                        {this.props.todo}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i class="fas fa-pen"/>
                        </button>
                        <button onClick={this.handleRemove}>
                            <i class="fas fa-trash" />
                        </button>
                    </div>
                </div>
            );
        }

        return result;
    }
}

export default Todo;
