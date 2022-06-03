const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("testing with sinon spy", () => {
	it("lets see spy", () => {
		const spy = sinon.spy(Utils, "calculateNumber");
		const payment = sendPaymentRequestToApi(12, 3);
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith("SUM", 12, 3)).to.be.true;
		spy.restore();
	});
});
