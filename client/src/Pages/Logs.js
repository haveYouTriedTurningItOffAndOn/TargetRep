import React, { Component } from "react";

class Logs extends Component {

    render() {
        return (
            <div className="card-deck">
                <div className="card btn " data-toggle="modal"  data-target="#workoutModal" >
                    <img className="card-img-top" src="./images/arms2.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Arms</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./images/chest.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Chest</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./images/legs.jpg" alt="Card image cap" />
                    <div className="card-body ">
                        <h5 className="card-title text-center">Legs</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./images/core.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Core</h5>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="./images/back.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">Back</h5>
                    </div>
                </div>
                <button type="button" className=" btn btn-primary" data-toggle="modal"  data-target="#workoutModal">Modal test</button>
            </div>
        );
    };
}
export default Logs;