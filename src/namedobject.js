import { EventEmitter } from 'events';

/**
 * abstract class for named objects.
 */
class NamedObject extends EventEmitter {
    /**
     * 
     * @param {string} name The name of the object. 
     * @param {string} description The description for the object.
     * @param {any} value The value of of object.
     */
    constructor(name, description, value) {
        super();
        this.name = name;
        this.description = description;
        this._value = value;
    }

    /**
     * Event that occurs when the object changes.
     */
    get changedEvent() {
        return 'onChanged';
    }

    /**
     * Returns the value.
     */
    get value() {
        return this._value;
    }

    /**
     * Sets the new value and emits and even.
     */
    set value(value) {
        this._value = value;
        this.emit(this.changedEvent, this._value);
    }
}

export default NamedObject;