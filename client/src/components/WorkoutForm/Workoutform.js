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
            <div class="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Workout Log</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Target Muslce Group</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext" value="Muscle Group A" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Target Muscle</label>
                                <select class="form-control col-sm-10" id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Weight</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" placeholder="000" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Repetitions</label>
                                <div class="col-sm-10">
                                    <input type="number" class="form-control" placeholder="000" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Log my workout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}


export default WorkoutForm;