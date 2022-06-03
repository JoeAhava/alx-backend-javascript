const getPaymentTokenFromAPI = require('./6-payment_token.js');

const chai = require('chai');

describe('get payment', () => {
    it('Promise test case', (done) => {
	getPaymentTokenFromAPI(true).then((result) => {
	    chai.expect(result).to.include({data: 'Successful response from the API' });
	    done();
	});
    });
});
