// commands.js

const Commands = [
    {
        name: 'help',
        execute: () => {
            return 'Available commands: help, look, walk to; The words in parantheses like "example" can be looked" at';
        }
    },
    {
        name: 'look',
        execute: (player) => {
            return player.location.description;
        }
    },
    {
        name: 'walk to',
        execute: () => {
            return;
        }
    },
    // Add more commands as needed...
];

export default Commands;
