let name = 'Harry';
let height = 187;
let message = `${name} is ${height} cms tall.`;

const fx = {
	add: (num1, num2) => num1 + num2,
	multiply: (num1, num2) => num1 * num2,
	nVal: () => null,
	istruthy: () => 3 > 2
};

module.exports = { name, height, message, fx };
