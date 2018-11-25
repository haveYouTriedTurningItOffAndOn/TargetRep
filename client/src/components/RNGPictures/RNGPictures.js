import React, { Component } from "react";



class RNGPictures extends Component {

    randomNumber = Math.floor((Math.random()*10)+1);

    workOuts = [
        
        {name: "5 Minute Plank", image: "5plank.jpg"},
        {name: "15 Minute Morning Workout", image: "15morning.jpg"},
        {name: "1000 Kicks", image: "1000kicks.jpg"},
        {name: "Ab Crunch", image: "abcrunch.jpg"},
        {name: "Abs On Fire", image: "absonfire.jpg"},
        {name: "Armor Abs", image: "armorabs.jpg"},
        {name: "Cardio Light", image: "cardiolight.jpg"},
        {name: "Combat Strength", image: "combatstrength.jpg"},
        {name: "Daily Burn", image: "dailyburn.jpg"},
        {name: "Dynamic Pyramid", image: "dynamicpyramid.jpg"},
        {name: "Indoor Cardio", image: "indoorcardio.jpg"},
        {name: "Killer Legs", image: "killerlegs.jpg"},
        {name: "Lower Back", image: "lowerback.jpg"},
        {name: "Master Pack", image: "masterpack.jpg"},
        {name: "Power 20", image: "power20.jpg"},
        {name: "PT Pyramid", image: "ptpyramid.jpg"},
        {name: "The Boulder", image: "theboulder.jpg"},
        {name: "Upper Body Sculpt", image: "upperbodysculpt.jpg"},
        {name: "Wake Up!", image: "wakeupandhappen.jpg"},
        {name: "Warm Up", image: "warmup.jpg"}

    ];

    handleFormSubmit = event => {
        event.preventDefault();
        alert("heres your random workout")


    };


    render(){
        return(
            <div>

            <button 
                type="button" 
                class="btn btn-outline-dark"
                onClick={this.handleFormSubmit}
            >
            Random Workout
            </button>  
            </div>
        );
    }
    

}

export default RNGPictures;