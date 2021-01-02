import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []}
    }

    edit = (id, editedTask) => {
       const updatedTodos = this.state.todos.map(t => {
           if(t.id === id) {
               return{ ...t, todo: editedTask}
           }
           return t;
       });

       this.setState({ todos: updatedTodos});
    }

    toggleTodo = (id) => {
        const toggledTodos = this.state.todos.map(t => {
            if (t.id === id) {
                return { ...t, hasCompleted: !t.hasCompleted }
            }
            return t;
        });

        this.setState({ todos: toggledTodos });
    }


    remove = (id) => {
        const todoLists = this.state.todos.filter(x => (x.id !== id));
        this.setState({
            todos: todoLists
        });
    }

    addTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo] 
        });
    }

    render() {
        let todos = this.state.todos.map( c => (
            <li key={c.id}>
                <Todo
                    id={c.id}
                    key={c.id}
                    todo={c.todo}
                    completed={c.hasCompleted}
                    remove={this.remove}
                    edit={this.edit}
                    toggleTodo={this.toggleTodo}
                />
            </li>
        ))
        return (
            <div className="TodoList">
                <h1>
                    Todo List! <span>A simple React Todo List App.</span>
                </h1>
                <ul>
                    {todos}
                </ul>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;