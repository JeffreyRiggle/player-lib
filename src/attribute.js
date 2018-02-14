import NamedObject from './namedobject';

export class Attribute extends NamedObject {
    constructor(name, description, value) {
        super(name, description, value);
    }
}