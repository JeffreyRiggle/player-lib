import { Inventory } from '../inventory';
import { Item } from '../item';

describe('Inventory', function() {
    var inv, item, updateEvent, callCount;

    beforeEach(function() {
        callCount = 0;
        inv = new Inventory();
        item = new Item('Potion', 'Restores Health');

        inv.on(inv.changedEvent, function(data) {
            callCount++;
            updateEvent = data;
        });
    });

    it('should have no items', function() {
        expect(inv.items.next().done).toBe(true);
    });

    describe('when an item is added', function() {
        beforeEach(function() {
            inv.addItem(item, 12);
        });

        it('should add the item', function() {
            expect(inv.items.next().value).toBe(item);
        });

        it('should have the correct amount', function() {
            expect(inv.getItemAmount(item)).toBe(12);
        });

        it('should have sent an update', function() {
            expect(callCount).toBe(1);
            expect(updateEvent.added[0]).toBe(item);
        });

        describe('when an item amount is changed', function() {
            beforeEach(function() {
                inv.setItemAmount(item, 2);
            });

            it('should have the updated item amount', function() {
                expect(inv.getItemAmount(item)).toBe(2);
            });
        });

        describe('when an item is removed', function() {
            beforeEach(function() {
                inv.removeItem(item);
            });

            it('should remove the item', function() {
                expect(inv.items.next().done).toBe(true);
            });

            it('should have sent an update', function() {
                expect(callCount).toBe(2);
                expect(updateEvent.removed[0]).toBe(item);
            });
        });
    });

    describe('when an invalid item is removed', function() {
        beforeEach(function() {
            inv.removeItem(item);
        });

        it('should have the correct item amount', function() {
            expect(inv.items.next().done).toBe(true);
        });

        it('should not send an update', function() {
            expect(callCount).toBe(0);
        });
    });
});