import NamedObject from './namedobject';

class Characteristic extends NamedObject {
    constructor(name, description, value) {
        super(name, description, value);
    }
}

export default Characteristic;