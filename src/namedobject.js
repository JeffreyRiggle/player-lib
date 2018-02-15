import EventEmitter from './eventemitter';

class NamedObject extends EventEmitter {
    constructor(name, description, value) {
        super();
        this.name = name;
        this.description = description;
        this._value = value;
    }

    get changedEvent() {
        return 'onChanged';
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        this.emit(this.changedEvent, this._value);
    }
}

export default NamedObject;