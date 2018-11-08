import React, { Component } from "react";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            Weekly overview chart
                            </div>
                        <div className="col">
                            Stuff?
                            </div>
                        <div className="col">
                            Last Entry 
                            </div>
                    </div>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">The only bad workout is the one that didn't happen.</h1>
                            <p class="lead">Track your workouts!</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}
export default Home;