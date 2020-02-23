import NamedObject from './namedobject';

/**
 * An property to associate to an item.
 */
export class Property extends NamedObject {
    /**
     * 
     * @param {string} name The properties name. 
     * @param {string} description The properties description.
     * @param {*} value The properties value.
     */
    constructor(name, description, value) {
        super(name, description, value);
    }
}