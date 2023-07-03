import NPCs from './npcs.js'; 
 

const Areas = {
    area1 : {
        name: 'area1',
        description: 'You are in a grey box. There is a "merchant" in here and a "guard" protecting the entrance to the "arena".', 
        pointsOfInterest/*and also positions*/: {
            default:'center of map',
            arena: 'A daunting path leading to an ominous arena.',                   
            merchant: NPCs.merchant,
            guard: NPCs.guard
        }
    },

    arena: {
        name: 'arena',
        description: 'You are in the Arena. No ones here right now and actually nothings here! Oh my god your entered the void of "not implemented yet!" What a nightmare!',
        pointsOfInterest: {
            void: 'dont touch it!',
            area1: 'ah sweet relief of certainty!'
        }
    }
};




export default Areas;
