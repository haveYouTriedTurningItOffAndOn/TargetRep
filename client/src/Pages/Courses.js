import React, { Component } from "react";
import WorkoutForm from "../components/WorkoutForm/Workoutform";


class Courses extends Component {



    render() {
        return (
            <div className="container-fluid">
                <WorkoutForm />
                {/* row 1 */}
                <div className="row bg-dark">
                    <div className="col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <div className="col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                </div>
                {/* row 3 */}
                <div className="row bg-dark">

                    <div className="courseButton col">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                    <div className="courseButton col">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                </div>
            </div>
        );
    };
}
export default Courses;