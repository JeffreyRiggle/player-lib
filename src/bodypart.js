import { EventEmitter } from 'events';

/**
 * A body part to associate with a player
 */
export class BodyPart extends EventEmitter {
    /**
     * 
     * @param {string} name The body parts name.
     * @param {string} description The body parts description.
     */
    constructor(name, description) {
        super();
        this.name = name;
        this.description = description;
        this.characteristics = [];
    }

    /**
     * Event that is emitted when the body part changes.
     */
    get changedEvent() {
        return 'onChanged';
    }

    /**
     * 
     * @param {Characteristic} characteristic A characteristic to add to the body part. 
     */
    addCharacteristic(characteristic) {
        this.characteristics.push(characteristic);
        this.emit(this.changedEvent, this);
    }

    /**
     * 
     * @param {Characteristic} characteristic A characteristic to remove from the body part.
     */
    removeCharacteristic(characteristic) {
        let index = this.characteristics.indexOf(characteristic);

        if (index !== -1) {
            this.characteristics.splice(index, 1);
            this.emit(this.changedEvent, this);
        }
    }

    /**
     * Removes all characteristics from the body part.
     */
    clearCharacteristic() {
        this.characteristics = [];
        this.emit(this.changedEvent, this);
    }
}