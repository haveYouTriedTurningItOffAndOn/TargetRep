import React, { Component } from "react";
import { PromiseProvider } from "mongoose";



class RNGPictures extends Component {

    state = {
        workout: "",
        workoutImage: "",
    };


    workOuts = [

        { name: "5 Minute Plank", image: "5plank.jpg" },
        { name: "15 Minute Morning Workout", image: "15morning.jpg" },
        { name: "1000 Kicks", image: "1000kicks.jpg" },
        { name: "Ab Crunch", image: "abcrunch.jpg" },
        { name: "Abs On Fire", image: "absonfire.jpg" },
        { name: "Armor Abs", image: "armorabs.jpg" },
        { name: "Cardio Light", image: "cardiolight.jpg" },
        { name: "Combat Strength", image: "combatstrength.jpg" },
        { name: "Daily Burn", image: "dailyburn.jpg" },
        { name: "Dynamic Pyramid", image: "dynamicpyramid.jpg" },
        { name: "Indoor Cardio", image: "indoorcardio.jpg" },
        { name: "Killer Legs", image: "killerlegs.jpg" },
        { name: "Lower Back", image: "lowerback.jpg" },
        { name: "Master Pack", image: "masterpack.jpg" },
        { name: "Power 20", image: "power20.jpg" },
        { name: "PT Pyramid", image: "ptpyramid.jpg" },
        { name: "The Boulder", image: "theboulder.jpg" },
        { name: "Upper Body Sculpt", image: "upperbodysculpt.jpg" },
        { name: "Wake Up!", image: "wakeupandhappen.jpg" },
        { name: "Warm Up", image: "warmup.jpg" }

    ];

    exampleGiven = props => {
        return <img src={props.image}></img>
    }

    //create a function to return state to blank

    handleFormSubmit = props => {
        var rng = Math.floor((Math.random() * this.workOuts.length))
        console.log("RNG")
        console.log(rng)
        console.log("----")

        //return state to blank / original state

        for (var i = 0; i < this.workOuts.length; i++) {
            console.log("for loop iteration #")
            console.log(i)
            console.log("----")
            if (i === rng) {
                // update state.workout with this.workouts[i].name
                this.state.workout = this.workOuts[i].name
                console.log("workout")
                console.log(this.state.workout)
                console.log("----")
                // update state.workoutImage with this.workouts[i].image
                this.state.workoutImage = this.workOuts[i].image
                console.log("workout image")
                console.log(this.state.workoutImage)
                console.log("----")
            }
        }
        
        //append workout state to courses ID div and create a placement for the picture to be displayed
        // make all pictures same size.

    }


    render() {
        return (
            <div>
                <div id="courses"></div>
                <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={this.handleFormSubmit}
                >
                    Random Workout
            </button>
            </div>
        );
    }


}

export default RNGPictures;