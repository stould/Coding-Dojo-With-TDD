var expect    = require('chai').expect;
var lib = require('../core/lib');

describe('Testing lib functions', function() {

    describe('ParseInput function', function() {
        it('parses empty string', function() {
            const mockedInput = '';
            expect(() => lib.parseInput(mockedInput)).to.throw(Error, 'Input string cannot be empty.');
        });
        it('parses one number from string', function() {
            const mockedInput = '5';
            const mockedOutput = {
                'values': [5],
                'operators': [],
            };
            const result = lib.parseInput(mockedInput);
            expect(result).to.be.an('Object');
            expect(result).to.deep.equal(mockedOutput);
        });
        it('parses two numbers from string', function() {
            const mockedInput = '5-2';
            const mockedOutput = {
                'values': [5,2],
                'operators': ['-'],
            };
            const result = lib.parseInput(mockedInput);
            expect(result).to.be.an('Object');
            expect(result).to.deep.equal(mockedOutput);
        });
        it('parses multiple numbers from string', function() {
            const mockedInput = '5+1-2';
            const mockedOutput = {
                'values': [5,1,2],
                'operators': ['+','-'],
            };
            const result = lib.parseInput(mockedInput);
            expect(result).to.be.an('Object');
            expect(result).to.deep.equal(mockedOutput);
        });
        it('parses even when first character is an operator plus', function() {
            const mockedInput = '+5+1-2';
            const mockedOutput = {
                'values': [5,1,2],
                'operators': ['+','-'],
            };
            const result = lib.parseInput(mockedInput);
            expect(result).to.be.an('Object');
            expect(result).to.deep.equal(mockedOutput);
        });
        it('parses even when first character is an operator minus', function() {
            const mockedInput = '-5+1-2';
            const mockedOutput = {
                'values': [-5,1,2],
                'operators': ['+','-'],
            };
            const result = lib.parseInput(mockedInput);
            expect(result).to.be.an('Object');
            expect(result).to.deep.equal(mockedOutput);
        });
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