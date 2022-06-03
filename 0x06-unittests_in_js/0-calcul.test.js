const calculateNumber = require("./0-calcul_chai");
const assert = require("assert");

describe("calculateNumber", () => {
    it("both int", () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it("first float", () => {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
    });
    it("second float", () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it("both float", () => {
        assert.strictEqual(calculateNumber(4.5, 1.4), 6);
    });
    it("both float", () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it("both float", () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});