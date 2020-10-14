import React, {Component} from "react";

class TaskForm extends Component
{
    constructor(){
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low",
        }
    }

    cambiador() {
        
    }

    render (){
        return(
        <div className="col-sm-4">
            <div className = "card">
                <div className = "card-head">
                    <h3><b>Nueva Carta</b></h3>
                    </div>
                <div className = "card-body">
                    <div className= "form-group">
                        <input
                        type="text"
                        name="title"
                        onChange = {this.cambiador}
                        className="form-control"
                        placeholder="Titulo"
                    />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange = {this.cambiador}
                            className="form-control"
                            placeholder="Descripcion"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            onChange = {this.cambiador}
                            className="form-control"
                            placeholder="Responsabilidad"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="priority"
                            onChange = {this.cambiador}
                            className="form-control"
                            placeholder="Prioridad"
                        />
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}
export default TaskForm;