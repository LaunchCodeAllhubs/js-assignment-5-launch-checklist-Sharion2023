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

/*function giveAlert() {
   // let form = document.querySelector("form");
    document.addEventListener("submit", function (event) {
        console.log("here")
        if(pilot==="Empty" ){
        alert("All fields are required")
        event.preventDefault();
        }
    });
}*/

function validateInput(testInput) {
   
    if (testInput === "") {
        return("Empty");
    } else if (isNaN(testInput)) {
        return "Not a Number"; 
    } else if (!(isNaN(testInput))) {
        return "Is a Number"
     } 
       //if(outcome ==="Is a Number" ){
        //alert("All fields are required")
         //   console.log("there")
        //}
}



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility = 'visible'
    console.log(pilot)
    if(validateInput(pilot) === "Empty"){
        alert("All fields must be filled. Enter pilot info")
    } else if (validateInput(pilot) === "Is a Number"){
        console.log("this spot")
        alert("Please enter a pilot valid name.")
        pilot = ""
    } else if (validateInput(pilot) === "Not a Number") {
       pilot = pilot
    }

   if(validateInput(copilot) === "Empty"){
    alert("All fields must be filled. Enter copilot info")
    } else if (validateInput(copilot) === "Is a Number"){
    console.log("this spot")
    alert("Please enter a copilot valid name.")
    copilot = ""
    } else if (validateInput(copilot) === "Not a Number") {
   copilot = copilot
    }

    if(validateInput(fuelLevel) === "Empty"){
        alert("All fields must be filled. Enter fuel level info")
        } else if (validateInput(fuelLevel) === "Not a Number"){
        console.log("this spot")
        alert("Please valid fuel level info.")
        fuelLevel = ""
        } else if (validateInput(fuelLevel) === "Is a Number") {
       fuelLevel = fuelLevel
        }

    if(validateInput(cargoLevel) === "Empty"){
       alert("All fields must be filled. Enter cargo level info")
         } else if (validateInput(cargoLevel) === "Not a Number"){
        console.log("this spot")
         alert("Please valid cargo level info.")
        cargoLevel = ""
         } else if (validateInput(cargoLevel) === "Is a Number") {
        cargoLevel = cargoLevel
        }
    //console.log(pilot)
     //console.log(copilot)
    
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus= document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    pilotStatus.innerHTML = `${pilot} is ready`


        
    }
    

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
