import NamedObject from './namedobject';

/**
 * An attribute to associate to a player.
 */
export class Attribute extends NamedObject {
    /**
     * 
     * @param {string} name The attributes name. 
     * @param {string} description The attributes description.
     * @param {*} value The attributes value.
     */
    constructor(name, description, value) {
        super(name, description, value);
    }
}