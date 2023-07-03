const NPCs = {
    merchant: {
        name: 'Merchant',
        description: 'A mysterious merchant offering various goods.',
        isAlive: true,
        hitPoints: 100,
        inventory: [],
        checkAlive: function() {
            if(this.hitPoints <= 0){
                this.isAlive = false;
            }
        },
        addItem: function(item) {
            this.inventory.push(item);
        },
        removeItem: function(item) {
            const index = this.inventory.indexOf(item);
            if (index > -1) {
                this.inventory.splice(index, 1);
            }
        }
    },
    guard: {
        name: 'Guard',
        description: 'A mean looking guy wearing Armorplating.',
        isAlive: true,
        hitPoints: 100,
        inventory: [],
        checkAlive: function() {
            if(this.hitPoints <= 0){
                this.isAlive = false;
            }
        },
        addItem: function(item) {
            this.inventory.push(item);
        },
        removeItem: function(item) {
            const index = this.inventory.indexOf(item);
            if (index > -1) {
                this.inventory.splice(index, 1);
            }
        }

    }
    // add more NPCs as needed...
}

export default NPCs;
