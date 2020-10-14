import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from "./Component/TaskForm";

import { tarea } from "./Tasks.json";

class App extends Component {
  constructor()
  {
    super();
    this.state = { 
      tareas: tarea
    }
  }
  render()  { 
    var tareas = this.state.tareas.map((task, index) => { 
      return (
      <div className="col-sm-3">
      <div className= "card">
        <div className="card-header">
          <h2>
            <b>{task.title}  </b>
            <i id= "priorityid"><span className= "badge badge-pill badge-primary">{task.priority}</span></i>
          </h2>
        </div>
        <div className="card-body">
          <h5>{task.description}</h5>
          <h7>Responsable: </h7>
          <h6>{task.responsible}</h6>
          <a href="#" class="btn btn-dark">Tarea Finalizada</a>
        </div>
      </div>
      </div>
    )})
    
    

    return(
    <div className="App">
      <nav className= "navbar navbar-dark bg-dark">
      <a href = "" className = "text-white">
        tarea<span className= "badge badge-pill badge-light">{tareas.length}</span>
      </a>
    </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className= "App-title"> Gestor de trabajos</h1>
        <h7>CAETI</h7>
      </header>
      <div className="row mt-4">
        {tareas}
      </div>
      <div className="row mt-4">
        <TaskForm/>
      </div>
    </div>
  );
}
}
export default App;
