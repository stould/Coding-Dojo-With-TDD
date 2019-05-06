var expect    = require('chai').expect;
var lib = require('../core/lib');

describe('Testing lib functions', function() {

    describe('ParseInput function', function() {

    });

    describe('Sum function', function() {
        it('sums two numbers', function() {
            const result = lib.sum(2, 3);
            expect(result).to.equal(5);
        });
    });

    describe('Subtract function', function() {
        it('Subtract two numbers', function() {
            const result = lib.subtract(5, 3);
            expect(result).to.equal(2);
        });
    });
});