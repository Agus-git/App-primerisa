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
        };
        this.cambiador = this.cambiador.bind(this);
        this.ButtonEffect = this.ButtonEffect.bind(this); 
    }

    cambiador(e) {
        var value = e.target.value;
        var name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    ButtonEffect(e)
    {
        console.log(this.state);
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
                        <select 
                            name="priority"
                            onChange = {this.cambiador}
                            className="form-control"
                            placeholder="Prioridad"
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                    </div>
                    <button onClick={this.ButtonEffect} type="button" class="btn btn-primary btn-lg btn-block">
                        Guardar
                    </button>
                </div>
            </div>
            </div> 
        )
    }
}
export default TaskForm;