import NamedObject from './namedobject';

export class Characteristic extends NamedObject {
    constructor(name, description, value) {
        super(name, description, value);
    }
}