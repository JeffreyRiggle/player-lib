import { Equipment } from '../equipment';
import { Item } from '../item';
import { BodyPart } from '../bodypart';

describe('Equipment', function() {
    var equip, bodypart, item, item2, callCount, changeData;

    beforeEach(function() {
        callCount = 0;
        equip = new Equipment();
        bodypart = new BodyPart('Head', 'The players head');
        item = new Item('Hat', 'A headgear');
        item2 = new Item('Cap', 'A headgear');

        equip.on(equip.changedEvent, function(data) {
            changeData = data;
            callCount++;
        });
    });

    describe('when an item is equipped', function() {
        beforeEach(function() {
            equip.equip(bodypart, item);
        });

        it('should have the correct equipment', function() {
            expect(equip.getEquip(bodypart)).toBe(item);
        });

        it('should send an update event', function() {
            expect(callCount).toBe(1);
            expect(changeData.added[0].item).toBe(item);
            expect(changeData.added[0].bodypart).toBe(bodypart);
        });

        describe('when a new item is equipped', function() {
            beforeEach(function() {
                equip.equip(bodypart, item2);
            });

            it('should have the correct equipment', function() {
                expect(equip.getEquip(bodypart)).toBe(item2);
            });
    
            it('should send an update event', function() {
                expect(callCount).toBe(2);
                expect(changeData.changed[0].item).toBe(item2);
                expect(changeData.changed[0].bodypart).toBe(bodypart);
            });
        });

        describe('when an item is unequipped', function() {
            beforeEach(function() {
                equip.unequip(bodypart);
            });

            it('should send an update event', function() {
                expect(callCount).toBe(2);
                expect(changeData.removed[0].item).toBe(item);
                expect(changeData.removed[0].bodypart).toBe(bodypart);
            });

            it('should remove the equipment', function() {
                expect(equip.getEquip(bodypart)).toBe(undefined);
            });
        });
    });

    describe('when an invalid item is unequipped', function() {
        beforeEach(function() {
            equip.unequip(bodypart);
        });

        it('should not send an update event', function() {
            expect(callCount).toBe(0);
        });

        it('should have the correct equipment', function() {
            expect(equip.getEquip(bodypart)).toBe(undefined);
        });
    });
});