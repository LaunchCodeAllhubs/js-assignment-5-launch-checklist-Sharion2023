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
    //list.style.visibility = 'visible';
    console.log(pilot)
    
   
   if(validateInput(pilot) !== "Not a Number" ){
    alert("Please enter a valid pilot name")
        validateInput(pilot)                 
    } else{        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready.` 
    }
    console.log(pilot)

    if(validateInput(copilot) !== "Not a Number"){
        alert("Please enter a valid copilot name")
        validateInput(copilot)                     
    } else{
        copilotStatus.innerHTML = `Copilot ${copilot} is ready.` 
    }
    console.log(copilot)

   if(validateInput(fuelLevel) !== "Is a Number"){
        alert("Please enter a valid fuel level number")
        validateInput(fuelLevel)
    } else if(fuelLevel< 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch"
        list.style.visibility = 'visible';
        launchStatus.style.color=  "red";
        launchStatus.innerHTML = `Shuttle not ready for launch`;
    }
       // list.style.visibility = 'visible';
        console.log("there")
    
    if(validateInput(cargoLevel) !== "Is a Number"){
        alert("Please enter a valid cargo level number")
         validateInput(cargoLevel)
        } else if(cargoLevel > 10000){             
             cargoStatus.innerHTML = "Cargo mass too heavy for launch"
             list.style.visibility = 'visible';
             launchStatus.innerHTML = `Shuttle not ready for launch`;
             launchStatus.style.color= "#C7254E"
        }
       
        if(validateInput(pilot) === "Not a Number" && validateInput(copilot) === "Not a Number" &&
        validateInput(cargoLevel) === "Is a Number" && validateInput(fuelLevel) === "Is a Number") {
        launchStatus.style.color = "#419F6A"
        launchStatus.innerHTML = `Shuttle is ready for launch`;

    }
    }
    //
    
    //&& validateInput(cargoLevel) === "Is Number"
    //console.log(pilot)
     //console.log(copilot)
    

    
    
    
    


    

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
