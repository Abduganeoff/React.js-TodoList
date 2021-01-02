import React, { Component } from 'react'
import './NewTodoForm.css';
const { v4: uuidv4 } = require('uuid');


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: ""}
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { ...this.state, id: uuidv4(), hasCompleted: false};
        this.props.addTodo(newTodo);
        this.setState({ todo: "" });
    }
    render() {
        return (
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New Todo</label>
                    <input
                        id="todo"
                        name = "todo" 
                        type = "text"
                        placeholder="New Todo"
                        onChange = {this.handleChange}
                        value = {this.state.todo}
                    />
                    <button>Add todo</button>
                </form>
        )
    }
}


export default NewTodoForm;