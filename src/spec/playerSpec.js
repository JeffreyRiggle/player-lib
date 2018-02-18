import Player from '../player';
import Attribute from '../attribute';
import BodyPart from '../bodypart';
import Characteristic from '../characteristic';

describe('Player', function() {
    var player;

    beforeEach(function() {
        player = new Player('Tester');
    });

    it('should have the correct name', function() {
        expect(player.name).toBe('Tester');
    });
    
    describe('when an attribute is added', function() {
        var att;

        beforeEach(function() {
            att = new Attribute('Age', 12);
            player.addAttribute(att);
        });

        it('should have the correct attributes', function() {
            expect(player.attributes[0]).toBe(att);
        });

        describe('when an attribute is removed', function() {
            beforeEach(function() {
                player.removeAttribute(att);
            });

            it('should remove the attribute', function () {
                expect(player.attributes.length).toBe(0);
            });
        });
    });

    describe('when a characteristic is added', function() {
        var chr;

        beforeEach(function() {
            chr = new Characteristic('HairColor', 'Brown');
            player.addCharacteristic(chr);
        });

        it('should have the correct characteristics', function() {
            expect(player.characteristics[0]).toBe(chr);
        });

        describe('when a characteristic is removed', function() {
            beforeEach(function() {
                player.removeCharacteristic(chr);
            });

            it('should remove the characteristic', function () {
                expect(player.characteristics.length).toBe(0);
            });
        });
    });

    describe('when a body part is added', function() {
        var bod;

        beforeEach(function() {
            bod = new BodyPart('Head', 'The players head');
            player.addBodyPart(bod);
        });

        it('should have the correct body parts', function() {
            expect(player.bodyParts[0]).toBe(bod);
        });

        describe('when a body part is removed', function() {
            beforeEach(function() {
                player.removeBodyPart(bod);
            });

            it('should remove the body part', function () {
                expect(player.bodyParts.length).toBe(0);
            });
        });
    });
});