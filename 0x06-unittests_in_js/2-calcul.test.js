const calculateNumber = require("./2-calcul_chai.js");

const chai = require("chai");

describe('calculateNumber Sum', () => {
    it('check result', () => {
        chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        chai.expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
        chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        chai.expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
        chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
});

describe('calculateNumber Subtract', () => {
    it('check result', () => {
 	chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        chai.expect(calculateNumber('SUBTRACT', 1.2, 1.2)).to.equal(0);
        chai.expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
        chai.expect(calculateNumber('SUBTRACT', 4.1, 1)).to.equal(3);
    });
});

describe('calculateNumber Divide', () => {
    it('check result', () => {
        chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	chai.expect(calculateNumber('DIVIDE', 1, 4.5)).to.equal(0.2);
	chai.expect(calculateNumber('DIVIDE', 0.0, 1)).to.equal(0);
	chai.expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
	chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
