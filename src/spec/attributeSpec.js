import { Attribute } from '../attribute';

describe('attribute', function() {
    var att, name, description, value;

    beforeEach(function() {
        name = 'Age';
        description = 'The players age';
        value = 12;
        att = new Attribute(name, description, value);
    });

    it('should have the correct name', function() {
        expect(att.name).toBe(name);
    });

    it('should have the correct description', function() {
        expect(att.description).toBe(description);
    });

    it('should have the correct value', function() {
        expect(att.value).toBe(value);
    });

    describe('when attribute value changes', function() {
        var changeValue, newVal;

        beforeEach(function(done) {
            newVal = 21;
            att.on(att.changedEvent, function(val) {
                changeValue = val;
                done();
            });

            att.value = 21;
        });

        it('should raise a change event with the new value', function() {
            expect(changeValue).toBe(newVal);
        });
    });
});