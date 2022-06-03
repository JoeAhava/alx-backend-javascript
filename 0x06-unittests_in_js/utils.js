const Utils = {
	calculateNumber(type, a, b) {
		switch (type) {
			case "SUM": {
				return Math.round(a) + Math.round(b);
			}
			case "SUBTRACT": {
				return Math.round(a) - Math.round(b);
			}
			case "DIVIDE": {
				const roundedB = Math.round(b);
				if (roundedB == 0) {
					return "Error";
				}
				return Math.round(a) / roundedB;
			}
			default:
				return "No type";
		}
	},
};

module.exports = Utils;
