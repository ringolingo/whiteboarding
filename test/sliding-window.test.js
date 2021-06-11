const expect = require('chai').expect;
const { maxSubarraySum, smallestSubarrayOfSum } = require('../lib/sliding-window')

describe('maxSubarraySum', function(){
    it('finds the maximum sum at beginning of array', function() {
        const array = [3, 2, 1, 2, 1];
        expect(maxSubarraySum(3, array)).to.equal(6);
    });

    it('finds maximum sum at end of array', function() {
        const array = [2, 5, 3, 4, 8, 5];
        expect(maxSubarraySum(2, array)).to.equal(13);
    });

    it('finds maximum sum if k is array length', function() {
        const array = [3, 2, 1, 2, 1];
        expect(maxSubarraySum(5, array)).to.equal(9);
    });

    it('finds maximum sum if k is 1', function() {
        const array = [2, 5, 3, 7, 8, 5];
        expect(maxSubarraySum(1, array)).to.equal(8);
    });

    it('finds maximum sum if all numbers the same', function() {
        const array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
        expect(maxSubarraySum(4, array)).to.equal(4);
    });
});

describe('smallestSubarrayOfSum', function() {
    it('finds smallest subarray >= s', function() {
        const array = [3, 3, 2, 1, 1, 4, 6, 1, 2];
        expect(smallestSubarrayOfSum(9, array)).to.equal(2);
    });

    it('returns 1 if a single element is >= s', function() {
        const array = [3, 3, 2, 1, 1, 4, 9, 1, 2];
        expect(smallestSubarrayOfSum(9, array)).to.equal(1);
    })

    it('returns zero if no subarray greater than s', function() {
        const array = [3, 3, 2, 1, 1, 2];
        expect(smallestSubarrayOfSum(15, array)).to.equal(0);
    });
});