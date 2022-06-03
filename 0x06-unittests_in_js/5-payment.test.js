const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("testing with sinon spy", () => {
	beforeEach(() => {
		cSpy = sinon.spy(console, "log");
	});
	afterEach(() => {
		cSpy.restore();
		sinon.restore();
	});
	it("test with spy and hooks 1", () => {
		const spy = sinon.spy(Utils, "calculateNumber");
		sendPaymentRequestToApi(100, 20);
		expect(cSpy.calledOnce).to.be.true;
		expect(cSpy.calledWith("The total is: 120")).to.be.true;
	});
	it("test with spy and hooks 2", () => {
		const spy = sinon.spy(Utils, "calculateNumber");
		sendPaymentRequestToApi(10, 10);
		expect(cSpy.calledOnce).to.be.true;
		expect(cSpy.calledWith("The total is: 20")).to.be.true;
	});
});
