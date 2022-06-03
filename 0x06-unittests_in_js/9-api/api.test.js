const request = require('request');

const chai = require('chai'); 
describe('Index page', () => {
    it('GET /', (done) => {
       const options = {
          url: 'http://localhost:7865',
          method: 'GET',
       };
       request(options, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome to the payment system');                                                       
        done();
       });
    });
});

describe('valid id', () => { 
    it('GET /cart/:id', (done) => {
       const options = {
          url: 'http://localhost:7865/cart/12',
          method: 'GET',
       };
	request(options, (error, response, body) => {
            chai.expect(body).to.equal('Payment methods for cart 12');
	    done();
       });
    });
});

describe('invalid id', () => { 
       it('GET /cart/:id(not number)', (done) => {
       const options = {
          url: 'http://localhost:7865/cart/hello',
          method: 'GET',
       };
       request(options, (error, response, body) => {
        chai.expect(response.statusCode).to.equal(404);                                                  
        done();
       });	
    });
});
