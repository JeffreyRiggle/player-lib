import NamedObject from './namedobject';

/**
 * A characteristic to associate to a player.
 */
export class Characteristic extends NamedObject {
    /**
     * 
     * @param {string} name The characteristics name. 
     * @param {string} description The characteristics description.
     * @param {*} value The characteristics value.
     */
    constructor(name, description, value) {
        super(name, description, value);
    }
}