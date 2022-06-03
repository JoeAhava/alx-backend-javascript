const calculateNumber = require('./1-calcul')
const expect = require('chai').expect

describe('calculateNumber with OP type', () => {
    it('type=SUM', () => {
        
        expect(calculateNumber('SUM', 1, 1.2)).to.be.equal(2)
    })
    it('type=SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 3, 1.2)).to.be.equal(2)
        
    })
    it('type=DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 4, 2.2)).to.be.equal(2)
        
    })
    it('type=DIVIDE Error', () => {
        expect(calculateNumber('DIVIDE', 1, 0.2)).to.be.equal('Error')
        
    })
})