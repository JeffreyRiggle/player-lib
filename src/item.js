import { EventEmitter } from 'events';

/**
 * An Item
 */
export class Item extends EventEmitter {
    constructor(name, description) {
        super();
        this.properties = [];
        this.name = name;
        this.description = description;
    }

    /**
     * Event that is emitted when the item changes.
     */
    get changedEvent() {
        return 'onChanged';
    }

    /**
     * 
     * @param {Property} property The property to add to the item.
     */
    addProperty(property) {
        this.properties.push(property);
        this.emit(this.changedEvent, this);
    }

    /**
     * 
     * @param {Property} property The property to remove from the item.
     */
    removeProperty(property) {
        let index = this.properties.indexOf(property);

        if (index !== -1) {
            this.properties.splice(index, 1);
            this.emit(this.changedEvent, this);
        }
    }

    /**
     * Removes all properties from the item.
     */
    clearProperties() {
        this.properties = [];
        this.emit(this.changedEvent, this);
    }
}