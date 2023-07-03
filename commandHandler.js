import Commands from './commands.js';
import Areas from './areas.js';




function handleCommand(input, player){
    let result = 'Command not found. Try typing "help".';
    // Check if the input matches a command
   
        for (let command of Commands){
            if(command.name === input){
                result = command.execute(player);
                return result; 
            }
        }

        // If the input doesn't match a command check if it's a point of interest
        let currentArea = Areas[player.area];
            if(currentArea.pointsOfInterest[input]){
                // If the point of interest is an NPC, use their description. Otherwise, just use the string.
                if(typeof currentArea.pointsOfInterest[input] === 'object'){
                    result = currentArea.pointsOfInterest[input].description;
                } else {
                    result = currentArea.pointsOfInterest[input];
                }
        }

        return result; 
    }

export default handleCommand;
