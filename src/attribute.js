import NamedObject from './namedobject';

class Attribute extends NamedObject {
    constructor(name, description, value) {
        super(name, description, value);
    }
}

export default Attribute;