let index = require('../index.js');

describe('Index Tests', () => {
	test('Name is Harry', () => {
		expect(index.name).toBe('Harry');
	});
	test('Height is less than 200', () => {
		expect(index.height).toBeLessThan(200);
	});
	test('Message to contain Name and Height', () => {
		expect(index.message).toContain(index.name, index.height);
	});
	test('Multiply fn to return a product', () => {
		expect(index.fx.multiply(3, 9)).toEqual(27);
	});
	test('Add fn to return a sum', () => {
		expect(index.fx.add(3, 9)).toEqual(12);
	});
	test('Confirm a null return value', () => {
		expect(index.fx.nVal()).toBeNull();
	});
	// test('Confirm a truthy value', () => {
	// 	expect(index.fx.istruthy()).toBeTruthy();
	// });
	test('Confirm a truthy value', () => {
		expect(index.fx.istruthy()).not.toBeFalsy();
	});
});
