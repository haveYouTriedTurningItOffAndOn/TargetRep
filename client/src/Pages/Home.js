import React, { Component } from "react";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="column">
                    <div className="level">
                        <div className="box column is-one-third">
                            Weekly overview chart
                            </div>
                        <div className="box column is-one-third">
                            Stuff?
                            </div>
                        <div className="box column is-one-third">
                            Last Entry
                            </div>
                    </div>
                    <section className="hero is-medium is-primary is-bold">
                        <div className="hero-body">
                            <div className="container">
                                <h1 className="title">
                                    The only bad workout is the one that didn't happen.
                                    </h1>
                                <h2 className="subtitle">
                                    Track your workouts!
                                    </h2>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

                );
            };
        }
export default Home;