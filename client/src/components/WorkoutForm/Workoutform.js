import React, { Component } from "react";
import API from "../../utils/API";
import "./Workoutform.css";


// change to take props. set courses to have all methods

class Workoutform extends Component {
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
            <div id="workOutForm" className="modal">
                <div className="modal-background"></div>
                <div id="modal1" className="modal-content">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Workout Log</p>
                    </header>
                    <label className="label">Target Muslce Group</label>
                    {/* Muscle dropdown */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Target Muscle</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    {/* use another component to create differnt muscle listings */}
                                    <div className="select">
                                        <select>
                                            <option>Muscle 1</option>
                                            <option>Muscle 2</option>
                                            <option>Muscle 3</option>
                                            <option>Muscle 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* reps */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Reps</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="100"></input>
                                </div>
                                <p className="help">Total repetitions.</p>
                            </div>
                        </div>
                    </div>
                    {/* weight */}
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Weight</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <input className="input" type="text" placeholder="100"></input>
                                </div>
                                <p className="help">Weight in kgs.</p>
                            </div>
                        </div>
                    </div>

                    {/* submit / cancel buttons */}
                    <div className="field is-grouped is-grouped-centered">
                        <p className="control">
                            <a className="button is-primary">
                                Submit
                    </a>
                        </p>
                        <p className="control">
                            <a className="closeWorkoutModal button is-light">
                                Cancel
                    </a>
                        </p>
                    </div>
                </div>
                <button className="closeWorkoutModal modal-close is-large" aria-label="close"></button>
            </div>
        );
    };
}


export default Workoutform;