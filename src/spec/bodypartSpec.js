import { BodyPart } from '../bodypart';
import { Characteristic } from '../characteristic';

describe('BodyPart', function() {
    var bodypart, name, description, chr;

    beforeEach(function() {
        name = 'Head';
        description = 'The players head';
        bodypart = new BodyPart(name, description);
        chr = new Characteristic('HairColor', 'The color of the players hair', 'Brown');
    });

    it('should have the correct name', function() {
        expect(bodypart.name).toBe(name);
    });

    it('should have the correct description', function() {
        expect(bodypart.description).toBe(description);
    });

    it('should have the correct characteristics', function() {
        expect(bodypart.characteristics.length).toBe(0);
    });

    describe('when a characteristic is added', function() {
        var updateVal;

        beforeEach(function(done) {
            bodypart.on(bodypart.changedEvent, function(val) {
                updateVal = val;
                done();
            });

            bodypart.addCharacteristic(chr);
        });

        it('should raise a change event with the new value', function() {
            expect(updateVal.characteristics[0]).toBe(chr);
        });

        describe('when a characteristic is removed', function() {
            beforeEach(function() {
                bodypart.removeCharacteristic(chr);
            });

            it('should update the body part', function() {
                expect(updateVal.characteristics.length).toBe(0);
            });
        });
    });

    describe('when an invalid characteristic is removed', function() {
        var callCount;

        beforeEach(function() {
            callCount = 0;

            bodypart.on(bodypart.changedEvent, function(val) {
                callCount++;
            });

            bodypart.removeCharacteristic(chr);
        });

        it('should update the body part', function() {
            expect(callCount).toBe(0);
        });
    });
});