import NamedObject from './namedobject';

class Property extends NamedObject {
    constructor(name, description, value) {
        super(name, description, value);
    }
}

export default Property;