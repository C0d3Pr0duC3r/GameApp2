import Player from './player.js'
import { gameStates } from './gamestate.js';
import Areas from './areas.js';
import handleCommand from './commandHandler.js';

let gameState = gameStates.NAME;
let player;
let playerLocation = Areas.area1;
let playerPosition = Areas.area1.pointsOfInterest.default;


let inputLine = document.getElementById('input-line');
console.log(inputLine.value);

output('Welcome to some Game! Please enter a name of some sort!')

inputLine.addEventListener('keydown', function(event) {
     if (event.key === 'Enter') {
        if(gameState === gameStates.NAME) {

            
            if(inputLine.value.length > 10){
                output('Not longer than 10 characters!');
            } else {            
                player = new Player(inputLine.value, 100, playerLocation, playerPosition);
                output('Hello, ' + player.name + '. Welcome to the game.');
                gameState = 'default';
                inputLine.value = ''; // clear the input
                showStats(player);
               
            }
            
            
            
            
        } else if(gameState === 'default') {
            output(handleCommand(inputLine.value, player));
            inputLine.value = ''; // clear the input
        }
     }
});






function output(text) {
    let outputDiv = document.getElementById('output-content');
    outputDiv.innerHTML += text + '<br>';
}

function showStats(player){
    let statDiv = document.getElementById('stat-content');
    statDiv.innerHTML = 'Player Location: ' + player.location.name + '<br>' + 'Player Position: ' + playerPosition + '<br>' + 'game state: ' + gameState + '<br>' + 'Name: ' + player.name + '<br>' + 'Health: ' + player.health;
}

export {gameState};
