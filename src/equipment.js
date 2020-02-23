import { EventEmitter } from 'events';

/**
 * The equipment a player has.
 */
export class Equipment extends EventEmitter {
    constructor() {
        super();
        this.equiped = new Map();
    }

    /**
     * Event that is emitted when the equipment changes.
     */
    get changedEvent() {
        return 'onChanged';
    }

    /**
     * 
     * @param {BodyPart} bodyPart The body part to equip.
     * @param {Item} item The item to equip to that body part.
     */
    equip(bodyPart, item) {
        let e = {
            bodypart: bodyPart,
            item: item
        };

        if (this.equiped.has(bodyPart)) {
            this.equiped.set(bodyPart, item);
            this.emit(this.changedEvent, {added: [], changed: [e], removed: []});
        } else {
            this.equiped.set(bodyPart, item);
            this.emit(this.changedEvent, {added: [e], changed: [], removed: []});
        }
    }

    /**
     * 
     * @param {BodyPart} bodyPart The body part to remove equipment from.
     */
    unequip(bodyPart) {
        let item = this.equiped.get(bodyPart);

        if (!item) {
            return;
        }

        let e = {
            item: item,
            bodypart: bodyPart
        };

        this.equiped.delete(bodyPart);
        this.emit(this.changedEvent, {added: [], changed: [], removed: [e]});
        return item;
    }

    /**
     * 
     * @param {BodyPart} bodyPart The body part to check equipment for.
     * 
     * @returns The Item equip to that body part.
     */
    getEquip(bodyPart) {
        return this.equiped.get(bodyPart);
    }
}