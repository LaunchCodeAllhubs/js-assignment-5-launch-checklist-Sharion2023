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

function giveAlert(){
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        alert("All fields are required")
    });
}

function validateInput(testInput) {
   if (NaN(testInput)){
    return "Not a Number";
   } else if (!(NaN(testInput))) {
   return "Is a Number";
   } else if (testInput === ""){
    return "Empty";
   }
}

const pilot = document.querySelector("input[name:pilotName]")
const copilot= document.querySelector("input[name:copilotName]")
const fuelLevel = document.querySelector("input[name:fuelLevel]")
const cargoLevel = document.querySelector("input[name:cargoMass]")
const list = document.getElementById("input[name:faultyItems]")

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
}
formSubmission(document, list, "Bob", "Another Bob", 12, 11)

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
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
