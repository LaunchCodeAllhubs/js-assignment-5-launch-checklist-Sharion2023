// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function giveAlert() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        alert("All fields are required")
    });
}

function validateInput(testInput) {
    if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!(isNaN(testInput))) {
        return "Is a Number";
    } else if (testInput === "") {
        return "Empty";
    }
}


//You'd access those from your HTML, and place them in a script in an eventlistener that is specific for submission, 
//because you're looking to grab that information when they input it and hit the submit button
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log("here")
    console.log(list)
    
    
    
    
    strings = [pilot, copilot]
    integers = [fuelLevel, cargoLevel]

       //for(let i=0; i < strings.length; i++){
            validateInput(pilot)
            if(pilot !== "Not a Number"){
                alert("Please enter a valid response!")
            }
     //   }
        
       /* for(let i=0; i < integers.length; i++){
            validateInput(integers)
            if(strings[i] !== "Is a Number"){
                alert("Please enter a valid response!")
            }
        }*/

    }
    
    //console.log(list)
    /*function validateInput(pilot){
    console.log("here")

        if(pilot !==("Not a Number")){
            console.log("here")
            alert("Please enter a valid response")
        }
   } */

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
