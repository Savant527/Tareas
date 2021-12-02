import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
import { render } from '@testing-library/react';
import { Component } from 'react';
import TodoForm from './components/TodoForm.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState ({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index){
    if (window.confirm('¿Estas seguro?')) {
      this.setState ({
      todos: this.state.todos.filter((e, i) => {
      return i !== index
    })
  })
  }
}
 
  render() {
   const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.titulo}</h3>
            <span className="badge badge-pill badge bg-secondary ml-2 prioridad">
              {todo.prioridad}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.descripcion}</p>
            <p><mark>{todo.responsable}</mark></p>
          </div>
          <div className="card-footer">
          <button className="btn btn-secondary"
          onClick={this.removeTodo.bind(this, i)}>
            Eliminar
          </button>
          </div>
        </div>

        </div>
      )
    })

    return (
      <div className="App">
         <nav className="navbar navbar-dark bg-dark">
         <a href="" className="text-white">
           TASKS
         </a>
         <span className="badge badge-pill badge bg-light ml-2 num">
           { this.state.todos.length }
         </span>
       </nav>
        
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
            <img src={logo} className="App-logo" alt="logo" />
            <TodoForm onAddTodo={this.handleAddTodo} />
            </div> 
            <div className="col-md-9">
              <div className="row">
              { todos }
              </div>
            </div>
         
          </div>
        </div>
           
    

          
          
      </div>
    );
  }
}

export default App;
