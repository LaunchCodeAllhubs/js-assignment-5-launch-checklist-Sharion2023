// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    

        missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${name} </li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src= ${imageUrl}>`
    
}

function validateInput(testInput) {
   
    if (testInput === "") {
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

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()            
        });
        return planetsReturned;        
    
}


function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    //console.log(planets[index])
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
