import { Item } from '../item';
import { Property } from '../property';

describe('Item', function() {
    var item, name, description, prop;

    beforeEach(function() {
        name = 'Potion';
        description = 'Restores a players health';
        item = new Item(name, description);
        prop = new Property('Heal', 'The amount of Health to restore', 100);
    });

    it('should have the correct name', function() {
        expect(item.name).toBe(name);
    });

    it('should have the correct description', function() {
        expect(item.description).toBe(description);
    });

    it('should have the correct properties', function() {
        expect(item.properties.length).toBe(0);
    });

    describe('when a property is added', function() {
        var updateVal;

        beforeEach(function(done) {
            item.on(item.changedEvent, function(val) {
                updateVal = val;
                done();
            });

            item.addProperty(prop);
        });

        it('should raise a change event with the new value', function() {
            expect(updateVal.properties[0]).toBe(prop);
        });

        describe('when a property is removed', function() {
            beforeEach(function() {
                item.removeProperty(prop);
            });

            it('should update the item', function() {
                expect(updateVal.properties.length).toBe(0);
            });
        });
    });

    describe('when an invalid property is removed', function() {
        var callCount;

        beforeEach(function() {
            callCount = 0;

            item.on(item.changedEvent, function(val) {
                callCount++;
            });

            item.removeProperty(prop);
        });

        it('should update the item', function() {
            expect(callCount).toBe(0);
        });
    });
});