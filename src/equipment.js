import { EventEmitter } from 'events';
import './item';
import './bodypart';

class Equipment extends EventEmitter {
    constructor() {
        super();
        this.equiped = new Map();
    }

    get changedEvent() {
        return 'onChanged';
    }

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
    }

    getEquip(bodyPart) {
        return this.equiped.get(bodyPart);
    }
}

export default Equipment;