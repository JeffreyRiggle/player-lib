import { Property } from '../property';

describe('property', function() {
    var prop, name, description, value;

    beforeEach(function() {
        name = 'Breakable';
        description = 'If the item is breakable';
        value = true;
        prop = new Property(name, description, value);
    });

    it('should have the correct name', function() {
        expect(prop.name).toBe(name);
    });

    it('should have the correct description', function() {
        expect(prop.description).toBe(description);
    });

    it('should have the correct value', function() {
        expect(prop.value).toBe(value);
    });

    describe('when property value changes', function() {
        var changeValue, newVal;

        beforeEach(function(done) {
            newVal = 21;
            prop.on(prop.changedEvent, function(val) {
                changeValue = val;
                done();
            });

            prop.value = 21;
        });

        it('should raise a change event with the new value', function() {
            expect(changeValue).toBe(newVal);
        });
    });
});