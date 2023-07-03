

class Player {
    constructor(name, health, location, mapPosition) {
       
        this.name = name;
        this.health = health;
        this.location = location;
        this.mapPosition = mapPosition
        this.area = location.name
        this.inventory = [];
    }

    changeLocation(newLocation) {
        this.location = newLocation;
    }

    addItem(item) {
        // check if the item that the player wants to add is valid or available (implemented later)
        if(true) {
            this.inventory.push(item); // add item to the inventory array
        }
    }

    removeItem(item){
        // implement this later
    }

    // ToDo: Implement MaxInventory Control system
}

// Export the Player class
export default Player;
