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

function validateInput(testInput) {
   
    if (testInput === "") {
        console.log("Spot 1")
        return("Empty");
    } else if (isNaN(testInput)) {
        return "Not a Number"; 
    } else if (!(isNaN(testInput))) {
        return "Is a Number"
     } 
    }



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
   if( validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel)=== "Empty" 
   || validateInput(cargoLevel)=== "Empty"){
    alert("All fields are required")
   }

   if( validateInput(pilot)!== "Not a Number" || validateInput(copilot)!== "Not a Number" || validateInput(fuelLevel)!== "Is a Number" 
   || validateInput(cargoLevel)!== "Is a Number") {
    alert("Please enter valid info")
   }
   
   if(fuelLevel < 10000 && validateInput(pilot)==="Not a Number" && validateInput(copilot)==="Not a Number" ){
    pilotStatus.innerHTML = `Pilot ${pilot} is ready.` 
    copilotStatus.innerHTML = `Copilot ${copilot} is ready.`
    fuelStatus.innerHTML = "Fuel level too low for launch"
    list.style.visibility = 'visible';
    launchStatus.style.color=  "red";
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    }

    if(cargoLevel > 10000 && validateInput(pilot)==="Not a Number" && validateInput(copilot)==="Not a Number" ){ 
     pilotStatus.innerHTML = `Pilot ${pilot} is ready.` 
    copilotStatus.innerHTML = `Copilot ${copilot} is ready.`            
    cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    list.style.visibility = 'visible';
    launchStatus.innerHTML = `Shuttle not ready for launch`;
    launchStatus.style.color= "#C7254E"
    }

    if( validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" && fuelLevel >=10000 &&
    cargoLevel <10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419f6A"

    }


    
}
    
    
    
    
    
    


    

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
