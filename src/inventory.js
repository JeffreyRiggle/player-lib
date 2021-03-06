import { EventEmitter } from 'events';

/**
 * The players inventory.
 */
export class Inventory extends EventEmitter {
    constructor() {
        super();
        this.itemMap = new Map();
    }

    /**
     * Event that is emitted when the inventory changes.
     */
    get changedEvent() {
        return 'onChanged';
    }

    /**
     * The items in the inventory.
     */
    get items() {
        return this.itemMap.keys();
    }

    /**
     * 
     * @param {Item} item The item to add to the inventory.
     * @param {number} amount The amount of that item to add.
     */
    addItem(item, amount) {
        this.itemMap.set(item, amount);
        this.emit(this.changedEvent, {added: [item], changed: [], removed: []});
    }

    /**
     * 
     * @param {Item} item The item to remove from the inventory.
     */
    removeItem(item) {
        if (this.itemMap.delete(item)) {
            this.emit(this.changedEvent, {added: [], changed: [], removed: [item]});
        }
    }

    /**
     * 
     * @param {Item} item The item to check.
     * 
     * @returns The amount of that item the inventory has.
     */
    getItemAmount(item) {
        return this.itemMap.get(item);
    }

    /**
     * 
     * @param {Item} item The item to update. 
     * @param {number} amount The new amount of that item.
     */
    setItemAmount(item, amount) {
        if(this.itemMap.has(item)) {
            this.itemMap.set(item, amount);
        }
    }

    /**
     * Removes all items from the inventory.
     */
    clearItems() {
        let removed = this.itemMap.keys();
        this.itemMap.clear();
        this.emit(this.changedEvent, {added: [], changed: [], removed: removed});
    }
}