import Inventory from "./inventory";
import Equipment from "./equipment";
import { EventEmitter } from 'events';
import './attribute';
import './characteristic';
import './bodypart';

class Player extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.inventory = new Inventory();
        this.equipment = new Equipment();
        this.bodyParts = [];
        this.characteristics = [];
        this.attributes = [];
    }

    addBodyPart(bodyPart) {
        this.bodyParts.push(bodyPart);
    }

    removeBodyPart(bodyPart) {
        let index = this.bodyParts.indexOf(bodyPart);

        if (index !== -1) {
            this.bodyParts.splice(index, 1);
        }
    }

    clearBodyParts() {
        this.bodyParts = [];
    }

    addCharacteristic(characteristic) {
        this.characteristics.push(characteristic);
    }

    removeCharacteristic(characteristic) {
        let index = this.characteristics.indexOf(characteristic);

        if (index !== -1) {
            this.characteristics.splice(index, 1);
        }
    }

    clearCharacteristics() {
        this.characteristics = [];
    }

    addAttribute(attribute) {
        this.attributes.push(attribute);
    }

    removeAttribute(attribute) {
        let index = this.attributes.indexOf(attribute);

        if (index !== -1) {
            this.attributes.splice(index, 1);
        }
    }

    clearAttributes() {
        this.attributes = [];
    }
}

export default Player;