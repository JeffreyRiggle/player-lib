import { Inventory } from "./inventory";
import { Equipment } from "./equipment";
import { EventEmitter } from 'events';

/**
 * A player.
 */
export class Player extends EventEmitter {
    /**
     * 
     * @param {string} name The name of the player.
     */
    constructor(name) {
        super();
        this.name = name;
        this.inventory = new Inventory();
        this.equipment = new Equipment();
        this.bodyParts = [];
        this.characteristics = [];
        this.attributes = [];
    }

    /**
     * 
     * @param {BodyPart} bodyPart A body part to add to the player.
     */
    addBodyPart(bodyPart) {
        this.bodyParts.push(bodyPart);
    }

    /**
     * 
     * @param {BodyPart} bodyPart A body part to remove from the player.
     */
    removeBodyPart(bodyPart) {
        let index = this.bodyParts.indexOf(bodyPart);

        if (index !== -1) {
            this.bodyParts.splice(index, 1);
        }
    }

    /**
     * Removes all body parts from the player.
     */
    clearBodyParts() {
        this.bodyParts = [];
    }

    /**
     * 
     * @param {Characteristic} characteristic A characteristic to add to the player.
     */
    addCharacteristic(characteristic) {
        this.characteristics.push(characteristic);
    }

    /**
     * 
     * @param {Characteristic} characteristic A characteristic to remove from the player.
     */
    removeCharacteristic(characteristic) {
        let index = this.characteristics.indexOf(characteristic);

        if (index !== -1) {
            this.characteristics.splice(index, 1);
        }
    }

    /**
     * Removes all charactersitics from the player.
     */
    clearCharacteristics() {
        this.characteristics = [];
    }

    /**
     * 
     * @param {Attribute} attribute An attribute to add to the player.
     */
    addAttribute(attribute) {
        this.attributes.push(attribute);
    }

    /**
     * 
     * @param {Attribute} attribute An attribute to remove from the player.
     */
    removeAttribute(attribute) {
        let index = this.attributes.indexOf(attribute);

        if (index !== -1) {
            this.attributes.splice(index, 1);
        }
    }

    /**
     * Removes all attributes from the player.
     */
    clearAttributes() {
        this.attributes = [];
    }
}