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

describe("calculateNumber SUM", () => {
    it("both int", () => {
        expect(calculateNumber('SUM',1, 3)).to.be.equal( 4);
    });
    it("first float", () => {
        expect(calculateNumber('SUM',1.2, 3)).to.be.equal( 4);
    });
    it("second float", () => {
        expect(calculateNumber('SUM',1, 3.7)).to.be.equal( 5);
    });
    it("both float", () => {
        expect(calculateNumber('SUM',4.5, 1.4)).to.be.equal( 6);
    });
    it("both float", () => {
        expect(calculateNumber('SUM',1.2, 3.7)).to.be.equal( 5);
    });
    it("both float", () => {
        expect(calculateNumber('SUM',1.5, 3.7)).to.be.equal( 6);
    });
});

describe("calculateNumber SUBTRACT", () => {
    it("both int", () => {
        expect(calculateNumber('SUBTRACT',6, 3)).to.be.equal( 3);
    });
    it("first float", () => {
        expect(calculateNumber('SUBTRACT',3.2, 3)).to.be.equal( 0);
    });
    it("second float", () => {
        expect(calculateNumber('SUBTRACT',4, 3.7)).to.be.equal( 0);
    });
    it("both float", () => {
        expect(calculateNumber('SUBTRACT',4.5, 1.4)).to.be.equal( 4);
    });
});

describe("calculateNumber DIVIDE", () => {
    it("both int", () => {
        expect(calculateNumber('DIVIDE',6, 3)).to.be.equal( 2);
    });
    it("first float", () => {
        expect(calculateNumber('DIVIDE',3.2, 2)).to.be.equal( 1.5);
    });
    it("second float", () => {
        expect(calculateNumber('DIVIDE',4, 1.7)).to.be.equal( 2);
    });
    it("both float", () => {
        expect(calculateNumber('DIVIDE',4.5, 0.4)).to.be.equal( 'Error');
    });
});