import EventEmitter from './eventemitter';

export class BodyPart extends EventEmitter {
    constructor(name, description) {
        super();
        this.name = name;
        this.description = description;
        this.characteristics = [];
    }

    get changedEvent() {
        return 'onChanged';
    }

    addCharacteristic(characteristic) {
        this.characteristics.push(characteristic);
        this.emit(this.changedEvent, this);
    }

    removeCharacteristic(characteristic) {
        let index = this.characteristics.indexOf(characteristic);

        if (index !== -1) {
            this.characteristics.splice(index, 1);
            this.emit(this.changedEvent, this);
        }
    }

    clearCharacteristic() {
        this.characteristics = [];
        this.emit(this.changedEvent, this);
    }
}