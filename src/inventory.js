import EventEmitter from './eventemitter';
import './item';

class Inventory extends EventEmitter {
    constructor() {
        super();
        this.itemMap = new Map();
    }

    get changedEvent() {
        return 'onChanged';
    }

    get items() {
        return this.itemMap.keys();
    }

    addItem(item, amount) {
        this.itemMap.set(item, amount);
        this.emit(this.changedEvent, {added: [item], changed: [], removed: []});
    }

    removeItem(item) {
        this.itemMap.delete(item);
        this.emit(this.changedEvent, {added: [], changed: [], removed: [item]});
    }

    getItemAmount(item) {
        return this.itemMap.get(item);
    }

    setItemAmount(item, amount) {
        if(this.itemMap.has(item)) {
            this.itemMap.set(item, amount);
        }
    }

    clearItems() {
        let removed = this.itemMap.keys();
        this.itemMap.clear();
        this.emit(this.changedEvent, {added: [], changed: [], removed: removed});
    }
}

export default Inventory;