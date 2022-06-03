const calculateNumber = require('./1-calcul')
const assert = require('assert')

describe('calculateNumber with OP type', () => {
    it('type=SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 1.2), 2)
    })
    it('type=SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 3, 1.2), 2)
    })
    it('type=DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 2.2), 2)
    })
    it('type=DIVIDE Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1, 0.2), 'Error')
    })
})