import React, { Component } from "react";
import WorkoutForm from "../components/WorkoutForm/Workoutform";


class Courses extends Component {
      


    render() {
        return (
            <div className="column">
                <WorkoutForm  />
                {/* row 1 */}
                <div className="level">
                    <div className="box column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                </div>
                {/* row 2 */}
                <div className="level">
                    <div className="box column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>
                </div>
                {/* row 3 */}
                <div className="level">
                </div><div className="level">
                    <div className="box courseButton column is-one-third">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                    <div className="box courseButton column is-one-third">
                        <img src="/images/icons8-ereader-50.png" alt=""></img>
                    </div>
                </div>
            </div>
        );
    };
}
export default Courses;