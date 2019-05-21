import { expect } from 'chai';
import * as lib from '../core/lib';

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
        it('subtract two numbers', function() {
            const result = lib.subtract(5, 3);
            expect(result).to.equal(2);
        });
    });



    describe('Evaluate function', function() {
        it('evaluates wrong param length, values.length === operators.length - 1', function() {
            const input = {
                'values': [50],
                'operators': ['+'],
            };

            expect(
                () => lib.evaluate(input.values, input.operators)
            ).to.throw(Error, 'Values array size should be operators array size + 1.');
        });

        it('evaluates 0 numbers', function() {
            const input = {
                'values': [],
                'operators': [],
            };

            expect(
                () => lib.evaluate(input.values, input.operators)
            ).to.throw(Error, 'Values array size should be operators array size + 1.');
        });

        it('evaluates one positive number', function() {
            const expression = '50';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);

            expect(result).to.equal(50);
        });

        it('evaluates one negative number', function() {
            const expression = '-50';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);

            expect(result).to.equal(-50);
        });

        it('evaluates two positive numbers', function() {
            const expression = '50+30';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);

            expect(result).to.equal(80);
        });

        it('evaluates two numbers subtract', function() {
            const expression = '50-30';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);

            expect(result).to.equal(20);
        });

        it('evaluates multiple positive numbers', function() {
            const expression = '50+30+10+11+5+123213';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);
            
            expect(result).to.equal(123319);
        });

        it('evaluates multiple negative numbers', function() {
            const expression = '-50-30-10-11-5-123213';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);
            
            expect(result).to.equal(-123319);
        });

        it('evaluates multiple mixed numbers with first positive', function() {
            const expression = '50-30-10+11-5+123213';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);
            
            expect(result).to.equal(123229);
        });

        it('evaluates multiple mixed numbers with first negative', function() {
            const expression = '-50-30-10+11-5+123213';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);
            
            expect(result).to.equal(123129);
        });

        it('evaluates multiple mixed numbers with negative return', function() {
            const expression = '-50-30+10+11-5-123213';

            const input = lib.parseInput(expression);
            const result = lib.evaluate(input.values, input.operators);
            
            expect(result).to.equal(-123277);
        });
    });
});