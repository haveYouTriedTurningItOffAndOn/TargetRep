import React, { Component } from "react";



class RNGPictures extends Component {

    randomNumber = Math.floor((Math.random()*10)+1);

    workOuts = [
        
    ]

    render(){
        return(
            <div>

            <button 
                type="button" 
                class="btn btn-outline-dark"
            >
            Dark
            </button>  
            </div>
        );
    }
    

}

export default RNGPictures;