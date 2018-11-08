import React, { Component } from "react";



class Logs extends Component {

    render() {
        return (
<div>
                <div id="workOutForm" className="field is-centered">
              
                <div id="modal1" className="card-content">
                    <header className="card-head">
                        <p className="card-title">Workout Log</p>
                    </header>
                    <label className="label">Target Muslce Group: Upper</label>
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
                                            <option>Chest</option>
                                            <option>Shoulders</option>
                                            <option>Upper Arms</option>
                                            <option>Lower Arms</option>
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
            </div>
        );
    };
}
export default Logs;