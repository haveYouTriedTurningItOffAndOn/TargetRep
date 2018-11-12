import React, { Component } from "react";
import API from "../../utils/API";
import "./Workoutform.css";


// change to take props. set courses to have all methods

class WorkoutForm extends Component {
    state = {
        targetMuscleGroup: "",
        targetMuscle: "",
        reps: "",
        weight: "",

    }

    optionSelected = event => {
        this.setState({targetMuscle:event.target.value});

    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Workout Form submitted");
        console.log("targetMuscleGroup: " + this.state.targetMuscleGroup);
        console.log("targetMuscle: " + this.state.targetMuscle);
        console.log("reps: " + this.state.reps);
        console.log("weight: " + this.state.weight);
        API.createLog({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }).then(

            this.setState({
                targetMuscleGroup: "",
                targetMuscle: "",
                reps: "",
                weight: "",

            }));
    }

    render() {
        return (
            <div className="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Workout Log</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Target Muscle Group</label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control-plaintext"
                                        value="Muscle Group A"
                                        name="targetMuscleGroup"
                                        value={this.state.targetMuscleGroup}
                                        onChange={this.optionSelected}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Target Muscle</label>
                                <select
                                    className="form-control col-sm-10"
                                    value={this.state.targetMuscle}
                                    onChange={this.optionSelected}
                                >
                                        <option value="1" >1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Weight</label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="000"
                                        name="weight"
                                        value={this.state.weight}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Repetitions</label>
                                <div className="col-sm-10">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="000"
                                        name="reps"
                                        value={this.state.reps}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit} data-dismiss="modal">Log my workout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default WorkoutForm;