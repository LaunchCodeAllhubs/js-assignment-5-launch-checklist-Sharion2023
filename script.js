// Write your JavaScript code here!



window.addEventListener("load", function() {

    
    addEventListener("submit", function(event){
               
        
        list = document.getElementById("faultyItems")
        pilot = document.querySelector("input[name=pilotName]").value
        copilot = document.querySelector("input[name=copilotName]").value
        fuelLevel = document.querySelector("input[name=fuelLevel]").value
        cargoLevel = document.querySelector("input[name=cargoMass]").value
        let launchStatus = document.getElementById("launchStatus")
        let pilotStatus = document.getElementById("pilotStatus")
         let copilotStatus= document.getElementById("copilotStatus")
        let fuelStatus = document.getElementById("fuelStatus")
        let cargoStatus = document.getElementById("cargoStatus")

        event.preventDefault(formSubmission(document,list, pilot, copilot, fuelLevel, cargoLevel))
          
        })
             

        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (results) {
            listedPlanets = results;
            console.log(listedPlanets);
        }).then(function () {
            console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       //pickPlanet(listedPlanets)
       console.log("here")
        console.log(pickPlanet(listedPlanets))
        //console.log(planets[index])
        
       let planet = pickPlanet(listedPlanets)
       let name = planet.name
        let diameter =planet.diameter
        let star = planet.star
        let distance = planet.distance
        let moons = planet.moons
        let imageUrl = planet.image
        let missionTarget = document.getElementById("missionTarget")
        addDestinationInfo(missionTarget, name, diameter, star, distance, moons, imageUrl)
       
       
       /*missionTarget.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
          <li>Name: ${name} </li>
           <li>Diameter: ${diameter} </li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance} </li>
           <li>Number of Moons: ${moons}</li>
       </ol>
       <img src= ${imageUrl}>`*/
        })

   

})

   
