import EventEmitter from './eventemitter';
import './property';

class Item extends EventEmitter {
    constructor(name, description) {
        super();
        this.properties = [];
        this.name = name;
        this.description = description;
    }

    get changedEvent() {
        return 'onChanged';
    }

    addProperty(property) {
        this.properties.push(property);
        this.emit(this.changedEvent, this);
    }

    removeProperty(property) {
        let index = this.properties.indexOf(property);

        if (index !== -1) {
            this.properties.splice(index, 1);
            this.emit(this.changedEvent, this);
        }
    }

    clearProperties() {
        this.properties = [];
        this.emit(this.changedEvent, this);
    }
}

export default Item;