const calculateNumber = require('./0-calcul')
const assert = require('assert');

describe('calculateNumber', () => {
    it('calculate tests', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.2, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(4.5, 1.4), 6);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    })
  
});
