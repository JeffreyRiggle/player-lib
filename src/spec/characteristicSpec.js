import Characteristic from '../characteristic';

describe('characteristic', function() {
    var chr, name, description, value;

    beforeEach(function() {
        name = 'Hair Color';
        description = 'The players hair color';
        value = 'Brown';
        chr = new Characteristic(name, description, value);
    });

    it('should have the correct name', function() {
        expect(chr.name).toBe(name);
    });

    it('should have the correct description', function() {
        expect(chr.description).toBe(description);
    });

    it('should have the correct value', function() {
        expect(chr.value).toBe(value);
    });

    describe('when characteristic value changes', function() {
        var changeValue, newVal;

        beforeEach(function(done) {
            newVal = 21;
            chr.on(chr.changedEvent, function(val) {
                changeValue = val;
                done();
            });

            chr.value = 21;
        });

        it('should raise a change event with the new value', function() {
            expect(changeValue).toBe(newVal);
        });
    });
});